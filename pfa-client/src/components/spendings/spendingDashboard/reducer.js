import produce from 'immer';

import { GET_INITIAL_AMOUNT_SUCCESS} from './constants';

const initialState = {
  initialAmount: 0,
  totalSpendingsOfMonth: 0,
  remaining: 0,
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_INITIAL_AMOUNT_SUCCESS:
        const totalSpendingsOfMonth = action.monthlyBudget && (action.monthlyBudget.spendingsSum[0].total + action.monthlyBudget.recurringsSum[0].total) || 0;
        draft.initialAmount = (action.initialAmount && action.initialAmount.initialAmount) || 0;
        draft.totalSpendingsOfMonth = totalSpendingsOfMonth;
        draft.remaining = (action.monthlyBudget && action.initialAmount && (action.initialAmount.initialAmount - totalSpendingsOfMonth)) || 0;
        break;
      default:
        return state;
    }
  });

export default dashboardReducer;
