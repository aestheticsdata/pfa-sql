import {
  GET_USERS,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CREATE_SPENDING,
  UPDATE_SPENDING,
  DELETE_SPENDING,
  GET_SPENDINGS,
  GET_SPENDINGS_SUCCESS,
  GET_RECURRING,
  GET_RECURRING_SUCCESS,
  CREATE_RECURRING,
  UPDATE_RECURRING,
  DELETE_RECURRING,
} from './constants';


export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  }
};

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories,
});

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
    ID: spendingID
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

export const getRecurring = (start) => {
  return {
    type: GET_RECURRING,
    start,
  };
};

export const getRecurringSuccess = (recurrings) => {
  return {
    type: GET_RECURRING_SUCCESS,
    recurrings,
  };
};

export const createRecurring = (recurring, month) => {
  return {
    type: CREATE_RECURRING,
    recurring,
    month,
  }
};

export const updateRecurring = (recurring) => {
  return {
    type: UPDATE_RECURRING,
    recurring,
  }
};

export const deleteRecurring = (recurringID) => {
  return {
    type: DELETE_RECURRING,
    id: recurringID,
  };
};








