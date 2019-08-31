import produce from 'immer';
import {
  REGISTER_SUCCESS,
} from '../register/constants';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./constants";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('pfa-token'),
};

const loginReducer = (state = initialState, action) =>
  produce((state, draft) => {
    if (action.type === REGISTER_SUCCESS || action.type === LOGIN_SUCCESS) {
        console.log('login reducer register success', action);
        localStorage.setItem('pfa-token', action.payload.token);
        draft.isAuthenticated = true;
        draft.token = action.payload.token;
    }
  });


export default loginReducer;
