import produce from 'immer';
import {
  GET_SPENDINGS_SUCCESS,
} from './constants';

const initialState = {
  spendings: [],
  currency: 'EUR',
};

const mainReducer = (state= initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SPENDINGS_SUCCESS:
        draft.spendings = action.spendings;
      break;
      default:
        return state;
    }
  });

export default mainReducer;
