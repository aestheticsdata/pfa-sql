import { takeLatest, call, put, select } from 'redux-saga/effects';
import { privateRequest } from '@helpers/requestHelper';
import startOfMonth from 'date-fns/startOfMonth';

import {
  GET_INITIAL_AMOUNT,
  SET_INITIAL_AMOUNT, UPDATE_INITIAL_AMOUNT,
} from './constants';

import { getInitialAmountSuccess } from './actions';
import { displayPopup } from '@helpers/swalHelper';
import { intl } from '@src/index';
import messages from '../messages';
import monthlyStatHelper from "@components/spendings/helpers/monthlyStatHelper";


function* onGetInitialAmout(payload) {
  try {
    const userID = JSON.parse(localStorage.getItem('pfa-user')).id;
    const res = yield call(privateRequest, `/dashboard?userID=${userID}&start=${startOfMonth(payload.fromAsWeekStart)}`);
    const monthlyStats = yield call(privateRequest, `/monthlystats?userID=${userID}&from=${payload.fromAsWeekStart}`);
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
    yield monthlyStatHelper(res, payload);
  } catch (err) {
    console.log('Error setting initial amount', err);
  }
}

function* onUpdateInitialAmount(payload) {
  try {
    const res = yield call(privateRequest, `/dashboard/${payload.dashboardID}`, {
      method: 'PUT',
      data: {
        userID: payload.userID,
        amount: payload.amount,
      },
    });
    displayPopup({ text: intl.formatMessage({ ...messages.initialAmountSetSuccess }) });
    yield monthlyStatHelper(res, payload);
  } catch (err) {
    console.log('Error setting initial amount', err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_INITIAL_AMOUNT, onGetInitialAmout);
  yield takeLatest(SET_INITIAL_AMOUNT, onSetInitialAmount);
  yield takeLatest(UPDATE_INITIAL_AMOUNT, onUpdateInitialAmount);
}

