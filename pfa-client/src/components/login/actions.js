import {
  LOGIN,
  LOGIN_SUCCESS
} from "./constants";

export const login = (email, password) => {
  console.log('login action');
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
