import produce from 'immer';

import { GET_INITIAL_AMOUNT_SUCCESS} from './constants';

const initialState = {
  initialAmount: 0,
  totalSpendingsOfMonth: 0,
  remaining: 0,
  dashboardID: null,
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_INITIAL_AMOUNT_SUCCESS:
        let totalSpendingsOfMonth = 0;
        const spendingsSum = action.monthlyBudget?.spendingsSum ?? 0;
        const recurringsSum = action.monthlyBudget?.recurringsSum ?? 0;
        const initialAmount = action.initialAmount?.initialAmount ?? 0;
        totalSpendingsOfMonth = spendingsSum + recurringsSum;
        draft.initialAmount = initialAmount;
        draft.totalSpendingsOfMonth = totalSpendingsOfMonth;
        draft.remaining = initialAmount - totalSpendingsOfMonth;
        draft.dashboardID = action.initialAmount?.ID;
        break;
      default:
        return state;
    }
  });
export default dashboardReducer;
