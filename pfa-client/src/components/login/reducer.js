import produce from 'immer';
import {
  REGISTER_SUCCESS,
} from '../register/constants';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './constants';
import {
  LOG_OUT,
} from '../logout/constants';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('pfa-token'),
  errorMessage: ''
};

const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('pfa-token', action.payload.data.token);
        draft.isAuthenticated = true;
        draft.token = action.payload.data.token;
        break;
      case LOG_OUT:
        localStorage.removeItem('pfa-token');
        draft.isAuthenticated = false;
        draft.token = null;
        break;
      case LOGIN_ERROR:
        draft.errorMessage = action.errorMessage;
        break;
      case CLEAR_LOGIN_ERROR:
        draft.errorMessage = '';
        break;
      default:
        return state;
    }
  });


export default loginReducer;
