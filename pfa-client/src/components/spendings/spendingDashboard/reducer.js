import produce from 'immer';

import { GET_INITIAL_AMOUNT_SUCCESS} from './constants';

const initialState = {
  initialAmount: 0,
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_INITIAL_AMOUNT_SUCCESS:
        draft.initialAmount = (action.payload && action.payload.initialAmount) || 0;
        break;
      default:
        return state;
    }
  });

export default dashboardReducer;
