import {
  GET_USERS,
  CREATE_SPENDING,
  UPDATE_SPENDING,
  DELETE_SPENDING,
  GET_SPENDINGS,
  GET_SPENDINGS_SUCCESS,
  UPDATE_CURRENCIES_RATES
} from './constants';

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const createSpending = (spending) => {
  return {
    type: CREATE_SPENDING,
    spending,
  };
};

export const updateSpending = (spending) => {
  return {
    type: UPDATE_SPENDING,
    spending,
  }
};

export const deleteSpending = (spendingID) => {
  return {
    type: DELETE_SPENDING,
    id: spendingID
  }
};

export const getSpendings = (user, dateRange) => {
  return {
    type: GET_SPENDINGS,
    user,
    dateRange,
  };
};

export const getSpendingsSuccess = (spendings, dateRange) => {
  return {
    type: GET_SPENDINGS_SUCCESS,
    spendings,
    dateRange,
  };
};

export const updateCurrenciesRates = (mergedRates) => {
  return {
    type: UPDATE_CURRENCIES_RATES,
    mergedRates,
  };
};






