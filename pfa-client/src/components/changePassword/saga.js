import { takeLatest, call } from 'redux-saga/effects';
import {
  CHANGE_PASSWORD,
} from './constants';
import { request } from '../../helpers/requestHelper';
import Swal from 'sweetalert2';

import { intl } from '../../index';
import messages from './messages';

export function* onChangePassword(payload) {
  try {
    yield call(request, '/users/resetpassword', {
      method: 'post',
      data: {
        email: payload.email,
        subject: intl.formatMessage({ ...messages.emailSubject }),
        changedPassword: payload.changedPassword,
      },
    });
    Swal.fire({
      title: intl.formatMessage({ ...messages.changePasswordSuccessTitle }),
      text: intl.formatMessage({ ...messages.changePasswordSuccessText }),
      type: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    })
  } catch (err) {
    console.log('error while changing password');
  }
}

export default function* defaultSaga() {
  yield takeLatest(CHANGE_PASSWORD, onChangePassword);
}
