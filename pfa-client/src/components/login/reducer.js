import produce from 'immer';
import Cookie from 'js-cookie';
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
import { CHANGE_BASE_CURRENCY_SUCCESS } from '../navbar/userMenu/constants';

const getInitialState = () => {
  const pfaToken = localStorage.getItem('pfa-token');
  return {
    isAuthenticated: !!pfaToken || false,
    token: pfaToken,
    user: JSON.parse(localStorage.getItem('pfa-user')),
    errorMessage: ''
  };
};

const loginReducer = (state = getInitialState(), action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('pfa-token', action.payload.data.token);
        localStorage.setItem('pfa-user', JSON.stringify(action.payload.data.user));
        !Cookie.get('lang') && Cookie.set('lang', action.payload.data.user.language);
        draft.isAuthenticated = true;
        draft.token = action.payload.data.token;
        draft.user = action.payload.data.user;
        break;
      case CHANGE_BASE_CURRENCY_SUCCESS:
        localStorage.setItem('pfa-user', JSON.stringify(action.user));
        draft.user = action.user;
        break;
      case LOG_OUT:
        localStorage.removeItem('pfa-token');
        localStorage.removeItem('pfa-user');
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
