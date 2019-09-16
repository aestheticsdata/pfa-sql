import { all } from 'redux-saga/effects';
import registerSaga from './components/register/saga';
import logoutSaga from './components/logout/saga';
import loginSaga from './components/login/saga';
import spendingsSaga from './components/spendings/saga';
import resetPasswordSaga from './components/forgotPassword/saga';
import changePasswordSaga from './components/changePassword/saga';
import userMenuSaga from './components/navbar/userMenu/saga';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    logoutSaga(),
    loginSaga(),
    spendingsSaga(),
    resetPasswordSaga(),
    changePasswordSaga(),
    userMenuSaga(),
  ])
}
