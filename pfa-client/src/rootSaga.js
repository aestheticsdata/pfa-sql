import { all } from 'redux-saga/effects';
import registerSaga from './components/register/saga';

export default function* rootSaga() {
  yield all([
    registerSaga(),
  ])
}
