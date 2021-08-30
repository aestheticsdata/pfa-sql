import { takeLatest, call, put } from 'redux-saga/effects';
import {
  REGISTER,
} from './constants';
import  {
  registerSuccess,
  registerFail,
} from './actions';
import { request } from '@helpers/requestHelper';

export function* onRegister(user) {
  try {
    const res = yield call(request, '/users/add', {
      method: 'POST',
      data: {
        name: user.email.split('@')[0],
        email: user.email,
        password: user.password,
        registerDate: new Date(),
        baseCurrency: user.currency,
        language: navigator.language.split('-')[0],
      }
    });
    yield put(registerSuccess(res))
  } catch (err) {
    yield put(registerFail(err.response.data.error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(REGISTER, onRegister);
}
