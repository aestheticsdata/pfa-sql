import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';

import registerReducer from './components/register/reducer';
import loginReducer from './components/login/reducer';
import spendingsReducer from './components/spendings/reducer';
import dateRangeReducer from './components/datePickerWrapper/reducer';
import dashboardReducer from './components/spendings/spendingDashboard/reducer';

import rootSaga from './rootSaga';

import { history } from './history';
import { History } from "history";


const createRootReducer = (history: History<unknown>) => combineReducers({
  router: connectRouter(history),
  registerReducer,
  loginReducer,
  spendingsReducer,
  dateRangeReducer,
  dashboardReducer,
});

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    )
  )
);
// see https://github.com/reduxjs/redux-toolkit/issues/324
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga); // https://redux-saga.js.org/docs/advanced/RootSaga.html

export default store;



