import { takeLatest, call } from 'redux-saga/effects';
import {
  CHANGE_PASSWORD,
} from './constants';
import { request } from '../../requestHelper';
import Swal from 'sweetalert2';

export function* onChangePassword(payload) {
  try {
    yield call(request, '/users/resetpassword', {
      method: 'post',
      data: {
        email: payload.email,
        subject: 'pfa password change',
        changedPassword: payload.changedPassword,
      },
    });
    Swal.fire({
      title: 'Success',
      text: 'change password success',
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
