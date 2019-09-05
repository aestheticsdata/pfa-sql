import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN,
} from './constants';
import {
  loginError,
  loginSucess,
} from './actions';

export function* onLogin(user) {
  try {
    const res = yield call(axios.post, '/users', {
      name: user.email,
      email: user.email,
      password: user.password,
    });
    yield put(loginSucess(res))
  } catch (err) {
    yield put(loginError(err.response.data.message))
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN, onLogin);
}
