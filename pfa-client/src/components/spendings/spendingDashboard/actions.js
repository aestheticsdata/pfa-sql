import {
  GET_INITIAL_AMOUNT,
  GET_INITIAL_AMOUNT_SUCCESS,
  SET_INITIAL_AMOUNT,
  UPDATE_INITIAL_AMOUNT,
  SET_INITIAL_CEILING,
  UPDATE_INITIAL_CEILING,
  SET_INITIAL_CEILING_SUCCESS,
} from './constants';

export const getInitialAmount = (start, fromAsWeekStart, toAsWeekEnd) => {
  return {
    type: GET_INITIAL_AMOUNT,
    start,
    fromAsWeekStart,
    toAsWeekEnd,
  }
};

export const getInitialAmountSuccess = (data, monthlyBudget) => {
  return {
    type: GET_INITIAL_AMOUNT_SUCCESS,
    data,
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

export const updateInitialAmount = (dashboardID, userID, amount) => {
  return {
    type: UPDATE_INITIAL_AMOUNT,
    userID,
    dashboardID,
    amount,
  };
};

export const setInitialCeiling = (dashboardID, userID, ceiling, month) => {
  return {
    type: SET_INITIAL_CEILING,
    userID,
    dashboardID,
    ceiling,
    month,
  };
};

export const setInitialCeilingSuccess = (data) => {
  return {
    type: SET_INITIAL_CEILING_SUCCESS,
    data,
  };
};
