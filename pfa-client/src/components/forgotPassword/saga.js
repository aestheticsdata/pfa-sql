import { takeLatest, call, put } from 'redux-saga/effects';
import { history } from '../../history';
import { RESET_PASSWORD } from './constants';
import { request } from '../../requestHelper';
import Swal from 'sweetalert2';

export function* onResetPassword(payload) {
  try {
    yield call(request, '/users/resetpassword', {
      method: 'post',
      data: {
        email: payload.email,
        subject: 'password recovery from pfa',
      },
    });
    Swal.fire({
      title: 'Success',
      text: 'a recovery password has been sent to your emai',
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
      title: 'recovery password error',
      text: 'error while sending email',
      type: 'error',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export default function* defaultSaga() {
  yield takeLatest(RESET_PASSWORD, onResetPassword);
}
