import produce from 'immer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_REGISTER_FAILED,
} from './constants';

const initialState = {
  failed: false,
  errorMessage: '',
  success: false,
};

const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        draft.success = true;
        break;
      case REGISTER_FAIL:
        draft.failed = true;
        draft.errorMessage = action.error;
        break;
      case CLEAR_REGISTER_FAILED:
        draft.failed = false;
        draft.errorMessage = '';
        break;
      default:
        return state;
    }
  });


export default registerReducer;
