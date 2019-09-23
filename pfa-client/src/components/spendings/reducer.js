import produce from 'immer';
import getDate from 'date-fns/getDate';
import parseISO from 'date-fns/parseISO';


import {
  GET_SPENDINGS_SUCCESS,
  // UPDATE_CURRENCIES_RATES,
} from './constants';

const tempArr = [];
tempArr.total = 0;
const spendingsPlaceholder = [tempArr, tempArr, tempArr, tempArr, tempArr, tempArr, tempArr];

const initialState = {
  spendings: spendingsPlaceholder,
  currency: 'EUR',
  isLoading: true,
  // exchangeRates: JSON.parse(localStorage.getItem('currenciesRates')),
};

// const getCurrencyConversion = (spending, exchangeRates, baseCurrency) => {
//   let amount;
//
//   if (spending.currency === baseCurrency) {
//     amount = spending.amount;
//   } else {
//     if (exchangeRates !== undefined && exchangeRates[spending.currency] !== undefined) {
//       amount = spending.amount * exchangeRates[spending.currency][baseCurrency];
//     } else {
//       amount = 0;
//       // localStorage.setItem('exchangeRatesIssue', true);
//     }
//   }
//
//   return amount;
// };

// transform an array of object into an array of array<Object> aggregated
// by same date
// const aggregateSpendingByDate = (spendings, range, exchangeRates, baseCurrency) => {
const aggregateSpendingByDate = (spendings, range) => {
  const spendingsFinal = [...spendingsPlaceholder];

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
        // const convertedAmount = getCurrencyConversion(spendings[i], exchangeRates, baseCurrency);
        // spendingsFinal[k].total += convertedAmount;
        // (convertedAmount === 0) && (spendingsFinal[k].exchangeRateIssue = true);
      }
    }
  }
  return spendingsFinal;
};

const spendingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        draft.isLoading = false;
        // draft.spendings = aggregateSpendingByDate(action.spendings, action.dateRange, state.exchangeRates, state.currency);
        draft.spendings = aggregateSpendingByDate(action.spendings, action.dateRange);
      break;
      // case UPDATE_CURRENCIES_RATES: {
      //   if (action.mergedRates) {
      //     draft.exchangeRates = action.mergedRates;
      //   } else {
      //     return state;
      //   }
      //   break;
      // }
      default:
        return state;
    }
  });

export default spendingsReducer;
