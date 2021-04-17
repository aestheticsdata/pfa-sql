import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useOnClickOutside from 'use-onclickoutside';
import StyledInvoiceModal from './StyledInvoiceModal';
import { uploadInvoiceFile } from "@components/spendings/invoiceModal/actions";

const InvoiceModal = ({ handleClickOutside, spending }) => {
  const [invoicefile, setInvoicefile] = useState('');
  const ref = useRef(null);
  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    // prevent scrolling on body when modal is open
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  const onChange = e => {setInvoicefile(e.target.files[0])}
  const dispatch = useDispatch();
  const userID = useSelector(state => state.loginReducer.user.id);

  const onSubmit = () => {
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
    formData.append('invoiceImageUpload', invoicefile);

    dispatch(uploadInvoiceFile(formData));
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
          spending?.invoiceImage ?
            <img
              src={spending.invoiceImage}
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
