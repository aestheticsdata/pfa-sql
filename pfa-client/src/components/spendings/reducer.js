import produce from 'immer';
import _ from 'lodash';

import {
  GET_SPENDINGS_SUCCESS,
} from './constants';

const initialState = {
  spendings: [null, null, null, null, null, null, null],
  currency: 'EUR',
};

const spendingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        // replace null in spendings by existing day spending
        draft.spendings = [...action.spendings, ...(_.take(state.spendings, state.spendings.length - action.spendings.length))];
      break;
      default:
        return state;
    }
  });

export default spendingsReducer;
