import { takeLatest, call } from 'redux-saga/effects';
import { history } from '../../history';
import { RESET_PASSWORD } from './constants';
import { request } from '../../helpers/requestHelper';
import Swal from 'sweetalert2';

import { intl } from '../../index';
import messages from './messages';

export function* onResetPassword(payload) {
  try {
    yield call(request, '/users/resetpassword', {
      method: 'post',
      data: {
        email: payload.email,
        subject: intl.formatMessage({ ...messages.emailSubject }),
      },
    });
    Swal.fire({
      title: intl.formatMessage({ ...messages.emailSentSuccessTitle }),
      text: intl.formatMessage({ ...messages.emailSentSuccessMessage }),
      type: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      onClose: () => {
        history.push('/login');
      },
    })
  } catch (err) {
    Swal.fire({
      title: intl.formatMessage({ ...messages.emailSentErrorTitle }),
      text: err.response.data,
      type: 'error',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
  }
}

export default function* defaultSaga() {
  yield takeLatest(RESET_PASSWORD, onResetPassword);
}
