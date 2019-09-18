import produce from 'immer';
import _ from 'lodash';
import getDate from 'date-fns/getDate';
import parseISO from 'date-fns/parseISO';


import {
  GET_SPENDINGS_SUCCESS,
} from './constants';

const spendingsPlaceholder = [null, null, null, null, null, null, null];
const initialState = {
  spendings: spendingsPlaceholder,
  currency: 'EUR',
};

// transform an array of object into an array of array<Object> aggregated
// by same date
const aggregateSpendingByDate = (spendings) => {
  let keys = _.uniq(spendings.map(spending => getDate(parseISO(spending.date))));
  let aggregateSpendings = [];
  for (let j = 0, lll = keys.length; j < lll; j += 1) {
    const arr = [];
    arr.total = 0;
    // arr.date = null;
    aggregateSpendings.push(arr);
  }
  for (let i = 0, l = spendings.length; i < l; i += 1 ) {
    for (let k = 0, ll = keys.length; k < ll; k += 1) {
      if (getDate(parseISO(spendings[i].date)) === keys[k]) {
        aggregateSpendings[k].push(spendings[i]);
        aggregateSpendings[k].total += spendings[i].amount;
        // aggregateSpendings[k].date = spendings[i].date;
      }
    }
  }
  return aggregateSpendings;
};

const spendingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        const aggregates = aggregateSpendingByDate(action.spendings);
        // replace null in spendings by existing day spending
        draft.spendings = [
          ...aggregates,
          ...(_.take(spendingsPlaceholder, state.spendings.length - aggregates.length))
        ];
      break;
      default:
        return state;
    }
  });

export default spendingsReducer;
