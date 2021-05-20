import produce from 'immer';

import {
  GET_INITIAL_AMOUNT_SUCCESS,
  SET_INITIAL_CEILING_SUCCESS,
} from './constants';
import { GET_WEEKLY_STATS_SUCCESS } from '@components/spendings/constants';

const initialState = {
  initialAmount: 0,
  ceiling: 0,
  totalSpendingsOfMonth: 0,
  remaining: 0,
  dashboardID: null,
  weeklyStats: [],
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_INITIAL_AMOUNT_SUCCESS:
        let totalSpendingsOfMonth = 0;
        const spendingsSum = action.monthlyBudget?.spendingsSum?._sum?.amount ?? 0;
        const recurringsSum = action.monthlyBudget?.recurringsSum?._sum?.amount ?? 0;
        const initialAmount = action.data?.initialAmount ?? 0;
        totalSpendingsOfMonth = parseFloat(spendingsSum) + parseFloat(recurringsSum);
        draft.initialAmount = parseFloat(initialAmount);
        draft.totalSpendingsOfMonth = totalSpendingsOfMonth;
        draft.remaining = initialAmount - totalSpendingsOfMonth;
        draft.dashboardID = action.data?.ID;
        draft.ceiling = action.data?.initialCeiling ?? 0;
        break;
      case GET_WEEKLY_STATS_SUCCESS:
        draft.weeklyStats = action.weeklyStats;
        break;
      case SET_INITIAL_CEILING_SUCCESS:
        draft.ceiling = action.data.initialCeiling;
        break;
      default:
        return state;
    }
  });
export default dashboardReducer;
