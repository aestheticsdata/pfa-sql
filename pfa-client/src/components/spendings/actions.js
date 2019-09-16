import {
  GET_USERS,
  CREATE_SPENDING,
  GET_SPENDINGS, GET_SPENDINGS_SUCCESS,
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

export const getSpendings = (userID) => {
  return {
    type: GET_SPENDINGS,
    userID,
  };
};

export const getSpendingsSuccess = (spendings) => {
  return {
    type: GET_SPENDINGS_SUCCESS,
    spendings,
  };
};


