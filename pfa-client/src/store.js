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
import { createBrowserHistory } from 'history';

import registerReducer from './components/register/reducer';

import rootSaga from './rootSaga';


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  registerReducer,
});

const history = createBrowserHistory();

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

sagaMiddleware.run(rootSaga); // pour combiner plusieurs sagas : https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308529293

export default store;



