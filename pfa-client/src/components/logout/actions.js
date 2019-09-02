import {
  LOG_OUT,
} from './constants';

export function logout() {
  return {
    type: LOG_OUT,
  };
}
