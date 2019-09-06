import { CHANGE_PASSWORD } from './constants';

export const changePassword = (email, changedPassword) => {
  return {
    type: CHANGE_PASSWORD,
    email,
    changedPassword,
  }
};