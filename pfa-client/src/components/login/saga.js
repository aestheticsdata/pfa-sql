import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN,
} from './constants';
import {
  loginSucess,
} from './actions';

export function* onLogin(user) {
  console.log('login saga');
  try {
    const res = yield call(axios.post, '/users', {
      name: user.email,
      email: user.email,
      password: user.password,
    });
    yield put(loginSucess(res))
  } catch (err) {
    // yield put(loginFailed(err.response.data.message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOGIN, onLogin);
}
