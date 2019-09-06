import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  REGISTER,
} from './constants';
import  {
  registerSuccess,
  registerFail,
} from './actions';

export function* onRegister(user) {
  try {
    const res = yield call(axios.post, '/users/add', {
      name: user.email.split('@')[0],
      email: user.email,
      password: user.password,
    });
    yield put(registerSuccess(res))
  } catch (err) {
    yield put(registerFail(err.response.data.message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(REGISTER, onRegister);
}