import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
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
  const onSubmit = () => {
    const formData = new FormData();
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
