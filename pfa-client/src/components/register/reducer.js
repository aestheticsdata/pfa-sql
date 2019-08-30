import produce from 'immer';
import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './constants';

const initialState = {
  token: localStorage.getItem('pfa-token'),
};

const registerReducer = (state = initialState, action) =>
  produce((state, draft) => {
      switch (action.type) {
        case REGISTER:
          console.log('in reducer, action : ', action);
          break;
        case REGISTER_SUCCESS:
          localStorage.setItem('pfa-token', action.payload.token);
          break;
        case REGISTER_FAIL:
          break;
        default:
          return state;
      }
    });


export default registerReducer;
