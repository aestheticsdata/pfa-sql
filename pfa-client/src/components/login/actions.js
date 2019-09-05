import {
  LOGIN, LOGIN_ERROR,
  LOGIN_SUCCESS,
  CLEAR_LOGIN_ERROR,
} from "./constants";

export const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password,
  }
};

export const loginSucess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  }
};

export const loginError = (errorMessage) => {
  return {
    type: LOGIN_ERROR,
    errorMessage,
  }
};

export const clearLoginFailed = () => {
  return {
    type: CLEAR_LOGIN_ERROR,
  }
}