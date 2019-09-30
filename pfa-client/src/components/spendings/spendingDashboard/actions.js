import {
  GET_INITIAL_AMOUNT,
  GET_INITIAL_AMOUNT_SUCCESS,
  SET_INITIAL_AMOUNT,
} from './constants';

export const getInitialAmount = (start) => {
  return {
    type: GET_INITIAL_AMOUNT,
    start,
  }
};

export const getInitialAmountSuccess = (payload) => {
  return {
    type: GET_INITIAL_AMOUNT_SUCCESS,
    payload,
  };
};

export const setInitialAmount = (userID, amount, month) => {
  return {
    type: SET_INITIAL_AMOUNT,
    userID,
    amount,
    month,
  };
};
