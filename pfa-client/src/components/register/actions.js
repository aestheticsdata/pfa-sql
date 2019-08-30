import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './constants';

export function register(email, password) {
  console.log('register action');
  return {
    type: REGISTER,
    email,
    password,
  };
}

export function registerSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function registerFail(error) {
  return {
    type: REGISTER_FAIL,
    error,
  };
}
