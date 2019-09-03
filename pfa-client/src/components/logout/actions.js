import {
  LOG_OUT,
  LOG_OUT_SUCCESS,
} from './constants';

export function logout() {
  return {
    type: LOG_OUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOG_OUT_SUCCESS,
  };
}
