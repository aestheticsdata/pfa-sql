import { takeLatest, all, call, put, select, spawn } from 'redux-saga/effects';
import { privateRequest, request } from '../../helpers/requestHelper';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import parseISO from 'date-fns/parseISO';
import _ from 'lodash';

import {
  CREATE_SPENDING,
  UPDATE_SPENDING,
  DELETE_SPENDING,
  GET_SPENDINGS,
  GET_USERS,
} from './constants';

import {
  getSpendingsSuccess,
  getSpendings,
  updateCurrenciesRates,
} from './actions';


import { displayPopup } from '../../helpers/swalHelper';
import { intl } from '../../index';
import messages from './messages';


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

export function* onCreateSpending(payload) {
  try {
    yield call(privateRequest, '/spendings/add', {
      method: 'POST',
      data: payload.spending,
    });
    displayPopup({ text: intl.formatMessage({ ...messages.createSuccess }) });
    const dateRange = yield select(state => state.dateRangeReducer.dateRange);
    yield put(getSpendings(payload.spending.userID, dateRange));
  } catch (err) {
    console.log('error while creating spending', err);
  }
}

export function* onUpdateSpending(payload) {
  try {
    const userID = JSON.parse(localStorage.getItem('pfa-user')).id;
    yield call(privateRequest, `/spendings/${payload.spending.id}`, {
      method: 'PUT',
      data: payload.spending,
    });
    displayPopup({ text: intl.formatMessage({ ...messages.updateSuccess }) });
    const dateRange = yield select(state => state.dateRangeReducer.dateRange);
    yield put(getSpendings(userID, dateRange));
  } catch (err) {
    console.log(err);
  }
}

export function* onDeleteSpending(payload) {
  try {
    yield call(privateRequest, `/spendings/${payload.id}`, {
      method: 'DELETE',
    });
    displayPopup({ text: intl.formatMessage({ ...messages.deleteSuccess }) });
    const userID = yield select(state => state.loginReducer.user.id);
    const dateRange = yield select(state => state.dateRangeReducer.dateRange);
    yield put(getSpendings(userID, dateRange));
  } catch (err) {
    console.log(`error while deleting spending :${err}`);
  }
}


export function* getCurrenciesRates(currenciesInSpendings) {
  // //////////////////////////////////////////////////////
  // see https://stackoverflow.com/a/46836144/2466369 /////
  const CORSoptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    }
  };
  // /////////////////////////////////////////////////////

  const currenciesRatesSaved = JSON.parse(localStorage.getItem('currenciesRates'));

  const baseCurrency = yield select(state => state.loginReducer.user.baseCurrency);

  try {
    currenciesInSpendings.length === 0 && currenciesInSpendings.push(baseCurrency);

    const exchangeRates = yield all(
      currenciesInSpendings.map(
        currency => {
          if (
            (currenciesRatesSaved && !currenciesRatesSaved[currency]) ||
            !currenciesRatesSaved ||
            differenceInCalendarDays(new Date(), parseISO(currenciesRatesSaved.date)) >= 1
          ) {
            return call(request, `https://api.exchangeratesapi.io/latest?base=${currency}`, CORSoptions)
          }
        }
      )
    );

    let rates = {};
    const ratesMap = _.map(_.remove(exchangeRates, undefined), 'data');
    ratesMap.map(rate => {
      rates[rate.base] = rate.rates;
      !rates.date && (rates.date = new Date());
    });
    let mergedRates;
    if (currenciesRatesSaved) {
      mergedRates = _.merge(currenciesRatesSaved, rates);
    } else {
      mergedRates = rates;
    }
    localStorage.setItem('currenciesRates', JSON.stringify(mergedRates));
    return mergedRates;
  } catch (err) {
    console.log(`error while getting currencies rates: ${err}`);
  }
}

export function* onGetSpendings(payload) {
  if (payload.dateRange.from) {
    try {
      const userID = JSON.parse(localStorage.getItem('pfa-user')).id;
      const res = yield call(privateRequest, `/spendings?userID=${userID}&from=${payload.dateRange.from}&to=${payload.dateRange.to}`);
      const currenciesInSpendings = _.uniq(res.data.map(spending => spending.currency));

      const mergedRates = yield getCurrenciesRates(currenciesInSpendings);
      yield put(updateCurrenciesRates(mergedRates));

      const dateRange = yield select(state => state.dateRangeReducer.dateRange.range);
      yield put(getSpendingsSuccess(res.data, dateRange));
    } catch (err) {
      console.log('error while getting spendings', err);
    }
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_USERS, onGetUser);
  yield takeLatest(CREATE_SPENDING, onCreateSpending);
  yield takeLatest(GET_SPENDINGS, onGetSpendings);
  yield takeLatest(DELETE_SPENDING, onDeleteSpending);
  yield takeLatest(UPDATE_SPENDING, onUpdateSpending);
}