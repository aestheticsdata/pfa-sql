import { takeLatest, call } from "redux-saga/effects";
import { UPLOAD_INVOICE_FILE } from "@components/spendings/invoiceModal/constants";
import { privateRequest } from "@helpers/requestHelper";

function* uploadInvoiceFile(payload) {
  yield call(privateRequest, '/spendings/upload', {
    method: 'POST',
    data: payload.formData,
  });
}

export default function* defaultSaga() {
  yield takeLatest(UPLOAD_INVOICE_FILE, uploadInvoiceFile);
}
