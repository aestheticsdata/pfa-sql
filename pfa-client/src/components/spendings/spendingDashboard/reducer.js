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
        let totalSpendingsOfMonth = 0;
        if (action.monthlyBudget) {
          const spendingsSum = ((action.monthlyBudget.spendingsSum.length > 0) && action.monthlyBudget.spendingsSum[0].total) || 0;
          const recurringsSum = ((action.monthlyBudget.recurringsSum.length > 0) && action.monthlyBudget.recurringsSum[0].total) || 0;
          totalSpendingsOfMonth = spendingsSum + recurringsSum;
        }
        const initialAmount = (action.initialAmount && action.initialAmount.initialAmount) || 0;
        draft.initialAmount = initialAmount;
        draft.totalSpendingsOfMonth = totalSpendingsOfMonth;
        draft.remaining = initialAmount - totalSpendingsOfMonth;
        break;
      default:
        return state;
    }
  });

export default dashboardReducer;
