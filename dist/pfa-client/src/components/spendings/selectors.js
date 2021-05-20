"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var useSpendingsSelectorHelper = function () {
    var userSelector = function (state) { return state.loginReducer.user; };
    var spendingsSelector = function (state) { return state.spendingsReducer.spendings; };
    var recurringsSelector = function (state) { return state.spendingsReducer.recurrings; };
    var isLoadingSelector = function (state) { return state.spendingsReducer.isLoading; };
    var dateRangeSelector = function (state) { return state.dateRangeReducer.dateRange; };
    var user = react_redux_1.useSelector(userSelector);
    var spendings = react_redux_1.useSelector(spendingsSelector);
    var recurrings = react_redux_1.useSelector(recurringsSelector);
    var isLoading = react_redux_1.useSelector(isLoadingSelector);
    var dateRange = react_redux_1.useSelector(dateRangeSelector);
    return {
        user: user,
        spendings: spendings,
        recurrings: recurrings,
        isLoading: isLoading,
        dateRange: dateRange,
    };
};
exports.default = useSpendingsSelectorHelper;
