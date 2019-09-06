import { takeLatest, call, put } from 'redux-saga/effects';
import { CHANGE_PASSWORD } from './constants';
import { request } from '../../requestHelper';

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
  } catch (err) {
    console.log('error while changing password');
  }
}

export default function* defaultSaga() {
  yield takeLatest(CHANGE_PASSWORD, onChangePassword);
}
