import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from 'use-onclickoutside';
import StyledInvoiceModal from './StyledInvoiceModal';
import {FormattedMessage, FormattedNumber} from 'react-intl';
import messages from '../messages';
import { privateRequest } from "@helpers/requestHelper";
import InvoiceImageModal from './invoiceImageModal/InvoiceImageModal';
import getCategoryComponent from "@components/common/Category";
import { ReactComponent as Spinner } from "@src/assets/Wedges-3s-200px.svg";
import { updateInvoicefileReducerStatus } from "@components/spendings/actions";


const InvoiceModal = ({ handleClickOutside, spending }) => {
  const fileSizeLimit = 32_097_152;
  const [invoicefile, setInvoicefile] = useState('');
  const [invoiceImage, setInvoiceImage] = useState(null);
  const [isFileTooBig, setIsFileTooBig] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClickOnThumbnail, setIsClickOnThumbnail] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [isProgress, setIsProgress] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const onChange = e => {setInvoicefile(e.target.files[0])}
  const userID = useSelector(state => state.loginReducer.user.id);

  const handleClickOutsideCheckFullImage = () => {
    !isClickOnThumbnail && handleClickOutside();
  }

  useOnClickOutside(ref, handleClickOutsideCheckFullImage);

  const deleteImage = async () => {
    try {
      setIsLoading(true);
      const res = await privateRequest('/spendings/upload', {
        method: 'PUT',
        data: spending,
      })
      if (res?.data?.msg === 'INVOICE_IMAGE_DELETED') {
        setInvoiceImage(null);
        dispatch(updateInvoicefileReducerStatus(spending, 'delete'));
        setIsLoading(false);
      }
    } catch (e) {
      console.log('error deleting image : ', e);
    }
  }

  const uploadInvoiceImage = async (payload) => {
    const config = {
      onUploadProgress: (progressEvent) => {
        const progressValue = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgressValue(progressValue);
        if (progressValue === 100) {
          setIsProgress(false);
          setProgressValue(0);
        }
      }
    };
    try {
      setIsProgress(true);
      setIsLoading(true);
      const uploadedImage = await privateRequest('/spendings/upload', {
        method: 'POST',
        data: payload,
      }, config);
      setInvoiceImage(uploadedImage.data);
      dispatch(updateInvoicefileReducerStatus(spending, 'create'));
      setIsLoading(false);
    } catch (e) {
      console.log('error uploading image : ', e);
    }
  }

  const getInvoiceImage = async (spending) => {
    setIsLoading(true);
    const res = await privateRequest(`/spendings/upload/${spending.ID}?userID=${userID}&itemType=${spending.itemType}`);
    setInvoiceImage(res.data);
    setIsLoading(false);
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
    setIsFileTooBig(false);
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
      setIsFileTooBig(true);
    } else {
      uploadInvoiceImage(formData);
    }
  };

  return (
    <StyledInvoiceModal>
      <div
        ref={ref}
        className="modal-content"
      >
        {
          isClickOnThumbnail ?
            <InvoiceImageModal
              image={invoiceImage}
              closeImage={() => setIsClickOnThumbnail(!isClickOnThumbnail)}
            />
            :
            null
        }
        <div className="header">
          <span className="label">{spending.label}</span>
          { spending?.category && getCategoryComponent(spending) }
          <span className="amount">
            <FormattedNumber
              value={spending.amount}
              style="currency"
              currency={spending.currency}
            />
          </span>
        </div>
        <div className="image-container">
          {
            isLoading ?
              <div className="spinner">
                <Spinner width="60px" height="60px" />
              </div>
              :
              invoiceImage ?
                <img
                  src={invoiceImage}
                  className="invoice-image"
                  width="30%"
                  alt="invoice"
                  onClick={() => {setIsClickOnThumbnail(!isClickOnThumbnail)}}
                />
                :
                <div className="no-invoice">
                  <div className="no-invoice-label">
                    <FormattedMessage { ...messages.noInvoice } />
                  </div>
                </div>
          }
        </div>
        <div className="inputfile-container">
          {
            isFileTooBig && (
              <div className="file-too-big">
                <FormattedMessage { ...messages.fileIsTooBig } />
              </div>
            )
          }
          {
            isLoading ?
              isProgress ?
                <progress id="progressBar" value={progressValue} max="100" style={{width: '300px'}} />
                :
                <div className="spinner">
                  <Spinner width="60px" height="60px" />
                </div>
              :
              invoiceImage ?
                <button
                  className="delete-btn"
                  onClick={deleteImage}
                >
                  <FormattedMessage { ...messages.deleteImage } />
                </button>
                :
                <>
                  <input
                    type="file"
                    name="invoicefile"
                    accept="image/jpeg"
                    onChange={onChange}
                  />
                  <FormattedMessage { ...messages.onlyThisFormat } />
                  <button
                    className="shared-login-submit-btn"
                    onClick={onSubmit}
                    disabled={invoicefile === ''}
                  >
                    <FormattedMessage { ...messages.sendImageLabel } />
                  </button>
                </>
          }
        </div>
      </div>
    </StyledInvoiceModal>
  )
};

export default InvoiceModal;
