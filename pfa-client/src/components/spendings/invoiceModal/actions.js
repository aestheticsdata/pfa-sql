import { UPLOAD_INVOICE_FILE } from './constants';

export const uploadInvoiceFile = (formData) => {
  return {
    type: UPLOAD_INVOICE_FILE,
    formData,
  }
}
