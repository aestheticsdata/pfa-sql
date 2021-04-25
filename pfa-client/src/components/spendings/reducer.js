import produce from 'immer';
import getDate from 'date-fns/getDate';
import parseISO from 'date-fns/parseISO';
import _ from 'lodash';
import { format } from 'date-fns';


import {
  GET_SPENDINGS_SUCCESS,
  GET_RECURRING_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  UPDATE_INVOICEFILE_REDUCER_STATUS,
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
        spendingsFinal[k].total += parseFloat(spendings[i].amount); // !! Sequelize returns a string for decimal type, see : https://github.com/sequelize/sequelize/issues/8019
      }
    }
  }

  for (let n = 0, l = spendingsFinal.length; n < l; n += 1) {
    spendingsFinal.weekTotal += spendingsFinal[n].total;
  }

  return spendingsFinal;
};

// update invoice file to sync icon status color
const setInvoicefile = (state, spendingOrRecurring, status) => {
  let outerIndex = 0;
  let innerIndex = 0;
  let savedInnerIndex = 0;
  const { itemType } = spendingOrRecurring;
  const spendingsClone = _.cloneDeep(state[itemType+'s']);

  if (itemType === 'spending') {
    for (const [i, arr] of spendingsClone.entries()) {
      innerIndex = _.findIndex(arr, o => o.ID === spendingOrRecurring.ID)
      if (innerIndex !== -1) {
        savedInnerIndex = innerIndex;
        outerIndex = i;
      }
    }
  }

  if (status === 'delete') {
    if (itemType === 'recurring') {
      spendingsClone[_.findIndex(spendingsClone, o => o.ID === spendingOrRecurring.ID)].invoicefile = null;
    } else {
      spendingsClone[outerIndex][savedInnerIndex].invoicefile = null;
    }
  }

  if (status === 'create') {
    const dateFormat = 'yyyy-MM-dd';
    let date;
    const stringToHyphen = s => s.replaceAll(' ', '-');
    date = format(new Date(itemType === 'spending' ? spendingOrRecurring.date : spendingOrRecurring.dateFrom), dateFormat);
    const filename = itemType + '-' + stringToHyphen(spendingOrRecurring.label) + '-' + date + '-r.jpg';
    if (itemType === 'recurring') {
      spendingsClone[_.findIndex(spendingsClone, o => o.ID === spendingOrRecurring.ID)].invoicefile = filename;
    } else {
      spendingsClone[outerIndex][savedInnerIndex].invoicefile = filename;
    }
  }
  return spendingsClone;
}


const spendingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        draft.isLoading = false;
        draft.spendings = aggregateSpendingByDate(action.spendings, action.dateRange);
      break;
      case GET_RECURRING_SUCCESS:
        draft.recurrings = action.recurrings;
        break;
      case GET_CATEGORIES_SUCCESS:
        draft.categories = action.categories;
        break;
      case UPDATE_INVOICEFILE_REDUCER_STATUS:
        draft[action.spending.itemType+'s'] = setInvoicefile(state, action.spending, action.status);
        break;
      default:
        return state;
    }
  });

export default spendingsReducer;
