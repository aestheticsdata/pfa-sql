import {
  CHANGE_BASE_CURRENCY,
} from './constants';

export const changeBaseCurrency = (userID, currency) => {
  return {
    type: CHANGE_BASE_CURRENCY,
    userID,
    currency,
  }
};
