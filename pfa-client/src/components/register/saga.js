import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import {
  REGISTER,
} from './constants';
import  {
  registerSuccess,
  registerFail,
} from './actions';

export function* onRegister(user) {
  console.log('saga register user : ', user);
  try {
    const res = yield call(axios.post, '/users/add', {
      name: user.email,
      email: user.email,
      password: user.password,
    });
    console.log('saga res : ', res);
    yield put(registerSuccess(res))
  } catch (err) {
    console.log('register error : ', err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(REGISTER, onRegister);
}