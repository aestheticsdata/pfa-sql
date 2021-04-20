import { useRef } from "react";
import useOnClickOutside from 'use-onclickoutside';
import StyledInvoiceImageModal from './StyledInvoiceImageModal';


const InvoiceImageModal = ({ image, closeImage }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, closeImage);

  return (
    <StyledInvoiceImageModal>
      <div
        className="image-container"
      >
        <img
          ref={ref}
          src={image}
          alt="invoice"
        />
      </div>
    </StyledInvoiceImageModal>
  );
};

export default InvoiceImageModal;
