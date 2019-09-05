import { RESET_PASSWORD } from './constants';

export function resetPassword(email) {
  return {
    type: RESET_PASSWORD,
    email,
  }
}


