import produce from 'immer';
import getDate from 'date-fns/getDate';
import parseISO from 'date-fns/parseISO';


import {
  GET_SPENDINGS_SUCCESS,
  GET_RECURRING_SUCCESS,
  GET_CATEGORIES_SUCCESS,
} from './constants';

const tempArr = [];
tempArr.total = 0;
const spendingsPlaceholder = [tempArr, tempArr, tempArr, tempArr, tempArr, tempArr, tempArr];

const initialState = {
  spendings: spendingsPlaceholder,
  recurrings: [],
  categories: [],
  currency: 'EUR',
  isLoading: true,
};

// transform an array of object into an array of array<Object> aggregated
// by same date
// const aggregateSpendingByDate = (spendings, range, exchangeRates, baseCurrency) => {
const aggregateSpendingByDate = (spendings, range) => {
  const spendingsFinal = [...spendingsPlaceholder];
  spendingsFinal.weekTotal = 0;

  for (let j = 0, r = range.length; j < r; j += 1) {
    const arr = [];
    arr.total = 0;
    arr.date = getDate(range[j]);
    spendingsFinal[j] = arr;
  }

  for (let i = 0, l = spendings.length; i < l; i += 1 ) {
    for (let k = 0, ll = spendingsFinal.length; k < ll; k += 1) {
      if (getDate(parseISO(spendings[i].date)) === spendingsFinal[k].date) {
        spendingsFinal[k].push(spendings[i]);
        spendingsFinal[k].total += spendings[i].amount;
      }
    }
  }

  for (let n = 0, l = spendingsFinal.length; n < l; n += 1) {
    spendingsFinal.weekTotal += spendingsFinal[n].total;
  }

  return spendingsFinal;
};

const spendingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        draft.isLoading = false;
        draft.spendings = aggregateSpendingByDate(action.spendings, action.dateRange);
      break;
      case GET_RECURRING_SUCCESS:
        draft.recurrings = action.recurrings;
        // draft.recurrings.flag = 'recurring';
        break;
      case GET_CATEGORIES_SUCCESS:
        draft.categories = action.categories;
      default:
        return state;
    }
  });

export default spendingsReducer;
