import { takeLatest, call, put, select } from 'redux-saga/effects';
import { privateRequest } from '../../../helpers/requestHelper';

import {
  GET_INITIAL_AMOUNT,
  SET_INITIAL_AMOUNT,
} from './constants';

import { getInitialAmountSuccess } from './actions';
import {displayPopup} from '../../../helpers/swalHelper';
import {intl} from '../../../index';
import messages from '../messages';


function* onGetInitialAmout(payload) {
  try {
    const userID = JSON.parse(localStorage.getItem('pfa-user')).id;
    const res = yield call(privateRequest, `/dashboard?userID=${userID}&start=${payload.start}`);
    const monthlyStats = yield call(privateRequest, `/monthlystats?userID=${userID}&start=${payload.start}&from=${payload.fromAsWeekStart}&to=${payload.toAsWeekEnd}`);
    yield put(getInitialAmountSuccess(res.data, monthlyStats.data));
  } catch (err) {
    console.log('error while getting initial amount : ', err);
  }
}

function* onSetInitialAmount(payload) {
  try {
    const res = yield call(privateRequest, '/dashboard', {
      method: 'POST',
      data: {
        userID: payload.userID,
        amount: payload.amount,
        ...payload.month,
      }
    });
    displayPopup({ text: intl.formatMessage({ ...messages.initialAmountSetSuccess }) });
    yield put(getInitialAmountSuccess(res.data));
  } catch (err) {
    console.log('Error setting initial amount', err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_INITIAL_AMOUNT, onGetInitialAmout);
  yield takeLatest(SET_INITIAL_AMOUNT, onSetInitialAmount);
}

