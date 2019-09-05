import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { privateRequest } from '../../requestHelper';

import { GET_USERS } from './constants';

export function* onGetUser() {
  try {
    const res = yield call(privateRequest, '/users/all');
    console.log('main res :', res);
  } catch(err) {
    console.log('err 777: ', err.response.status);
    if (err.response.status === 401) {
      yield put(push('/logout'));
    }
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_USERS, onGetUser);
}