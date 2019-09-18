import produce from 'immer';

import { DATE_RANGE_CHANGE } from './constants';

const initialState = {
  dateRange: {
    from: null,
    to: null,
  }
};

const dateRangeReducer = (state = initialState, action) =>
  produce(state, draft => {
    if (action.type === DATE_RANGE_CHANGE) {
      draft.dateRange = action.dateRange;
    } else {
      return state;
    }
  });

export default dateRangeReducer;
