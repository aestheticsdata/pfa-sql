import {
  GET_USERS,
  CREATE_SPENDING,
  GET_SPENDINGS,
  GET_SPENDINGS_SUCCESS,
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

export const getSpendings = (userID, dateRange) => {
  return {
    type: GET_SPENDINGS,
    userID,
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


