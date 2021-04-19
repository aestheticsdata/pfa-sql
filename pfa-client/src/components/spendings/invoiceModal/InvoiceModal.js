import {
  useState,
  useEffect,
  useRef,
} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import useOnClickOutside from 'use-onclickoutside';
import StyledInvoiceModal from './StyledInvoiceModal';
import { uploadInvoiceFile } from "@components/spendings/invoiceModal/actions";
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import { privateRequest } from "@helpers/requestHelper";


const InvoiceModal = ({ handleClickOutside, spending }) => {
  const fileSizeLimit = 2_097_152;
  const [invoicefile, setInvoicefile] = useState('');
  const [invoiceImage, setInvoiceImage] = useState(null);
  const [isFileToBig, setIsFileToBig] = useState(false);
  const ref = useRef(null);
  const onChange = e => {setInvoicefile(e.target.files[0])}
  const dispatch = useDispatch();
  const userID = useSelector(state => state.loginReducer.user.id);
  useOnClickOutside(ref, handleClickOutside);

  const getInvoiceImage = async (spending) => {
    const res = await privateRequest(`/spendings/upload/${spending.ID}?userID=${userID}&itemType=${spending.itemType}`);
    setInvoiceImage(res.data);
  }

  useEffect(() => {
    getInvoiceImage(spending);

    // prevent scrolling on body when modal is open
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  const onSubmit = () => {
    setIsFileToBig(false);
    const formData = new FormData();

    // beware, userID must be append before file
    // see : https://stackoverflow.com/questions/39589022/node-js-multer-and-req-body-empty
    formData.append('userID', userID);

    switch (spending.itemType) {
      case 'recurring':
        formData.append('itemType', 'recurring');
        formData.append('dateFrom', spending.dateFrom);
        break;
      case 'spending':
        formData.append('itemType', 'spending');
        formData.append('date', spending.date);
        break;
      default:
        break;
    }

    formData.append('label', spending.label);
    formData.append('spendingID', spending.ID);
    formData.append('invoiceImageUpload', invoicefile);

    if (invoicefile.size > fileSizeLimit) {
      setIsFileToBig(true);
    } else {
      dispatch(uploadInvoiceFile(formData));
    }
  };

  return (
    <StyledInvoiceModal>
      <div
        ref={ref}
        className="active-zone"
      >
        <div>
          invoice
        </div>
        {
          isFileToBig && (
            <div className="file-too-big">
              <FormattedMessage { ...messages.fileIsTooBig } />
            </div>
          )
        }
        {
          invoiceImage ?
            <img
              src={invoiceImage}
              className="invoice-image"
              alt="invoice"
            />
            :
            <div>no invoice image</div>
        }
        <input
          type="file"
          name="invoicefile"
          accept="image/png, image/jpeg"
          onChange={onChange}
        />
        <button
          className="shared-login-submit-btn"
          onClick={onSubmit}
        >
          envoyer
        </button>
      </div>
    </StyledInvoiceModal>
  )
};

export default InvoiceModal;
