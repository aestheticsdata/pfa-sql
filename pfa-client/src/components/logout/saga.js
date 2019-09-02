import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOG_OUT } from './constants';

export function* onLogout() {
  yield put(push('/login'));
}

export default function* defaultSaga() {
  yield takeLatest(LOG_OUT, onLogout);
}
