import { takeLatest, call, put, select } from 'redux-saga/effects';
import { privateRequest } from '../../helpers/requestHelper';

import {
  CREATE_SPENDING, GET_SPENDINGS,
  GET_USERS
} from './constants';

import {
  getSpendingsSuccess,
} from './actions';


export function* onGetUser() {
  try {
    yield call(privateRequest, '/users/all');
  } catch(err) {
    console.log('Main saga err', err);
    // if (err.response.status === 401) {
      // yield put(push('/logout'));
    // }
  }
}

export function* createSpending(payload) {
  try {
    yield call(privateRequest, '/spendings/add', {
      method: 'POST',
      data: payload.spending,
    });
  } catch (err) {
    console.log('error while creating spending', err);
  }
}

export function* getSpendings(payload) {
  try {
    const res = yield call(privateRequest, `/spendings?userID=${payload.userID}&from=${payload.dateRange.from}&to=${payload.dateRange.to}`);
    const dateRange = yield select(state => state.dateRangeReducer.dateRange.range);
    yield put(getSpendingsSuccess(res.data, dateRange));
  } catch (err) {
    console.log('error while getting spendings', err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_USERS, onGetUser);
  yield takeLatest(CREATE_SPENDING, createSpending);
  yield takeLatest(GET_SPENDINGS, getSpendings);
}