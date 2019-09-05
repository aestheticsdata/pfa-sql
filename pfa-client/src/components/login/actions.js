import {
  LOGIN,
  LOGIN_SUCCESS
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
