import {
  GET_INITIAL_AMOUNT,
  GET_INITIAL_AMOUNT_SUCCESS,
  SET_INITIAL_AMOUNT,
} from './constants';

export const getInitialAmount = (start, fromAsWeekStart, toAsWeekEnd) => {
  return {
    type: GET_INITIAL_AMOUNT,
    start,
    fromAsWeekStart,
    toAsWeekEnd,
  }
};

export const getInitialAmountSuccess = (initialAmount, monthlyBudget) => {
  return {
    type: GET_INITIAL_AMOUNT_SUCCESS,
    initialAmount,
    monthlyBudget,
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
