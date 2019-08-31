import produce from 'immer';
import {
  REGISTER_FAIL,
} from './constants';

const initialState = {
  failed: false,
};

const registerReducer = (state = initialState, action) =>
  produce((state, draft) => {
      if (action.type === REGISTER_FAIL) {
          draft.failed = true;
      }
    });


export default registerReducer;
