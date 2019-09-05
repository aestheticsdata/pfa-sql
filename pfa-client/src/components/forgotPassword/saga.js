import { takeLatest, call, put } from 'redux-saga/effects';
import { RESET_PASSWORD } from './constants';
import { request } from '../../requestHelper';

export function* onResetPassword(payload) {
  try {
    yield call(request, '/users/resetpassword', {
      method: 'post',
      data: {
        email: payload.email,
        subject: 'password recovery from pfa',
        message: 'your new password is: abracadabra'
      },
    });
  } catch (err) {
    console.log('error while resetting password');
  }
}

export default function* defaultSaga() {
  yield takeLatest(RESET_PASSWORD, onResetPassword);
}


