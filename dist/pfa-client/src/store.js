"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_saga_1 = __importDefault(require("redux-saga"));
var connected_react_router_1 = require("connected-react-router");
var reducer_1 = __importDefault(require("./components/register/reducer"));
var reducer_2 = __importDefault(require("./components/login/reducer"));
var reducer_3 = __importDefault(require("./components/spendings/reducer"));
var reducer_4 = __importDefault(require("./components/datePickerWrapper/reducer"));
var reducer_5 = __importDefault(require("./components/spendings/spendingDashboard/reducer"));
var reducers_1 = __importDefault(require("@components/categories/reducers"));
var rootSaga_1 = __importDefault(require("./rootSaga"));
var history_1 = require("./history");
var createRootReducer = function (history) { return redux_1.combineReducers({
    router: connected_react_router_1.connectRouter(history),
    registerReducer: reducer_1.default,
    loginReducer: reducer_2.default,
    spendingsReducer: reducer_3.default,
    dateRangeReducer: reducer_4.default,
    dashboardReducer: reducer_5.default,
    categoriesReducer: reducers_1.default,
}); };
var sagaMiddleware = redux_saga_1.default();
var store = redux_1.createStore(createRootReducer(history_1.history), redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(connected_react_router_1.routerMiddleware(history_1.history), sagaMiddleware)));
sagaMiddleware.run(rootSaga_1.default); // https://redux-saga.js.org/docs/advanced/RootSaga.html
exports.default = store;
