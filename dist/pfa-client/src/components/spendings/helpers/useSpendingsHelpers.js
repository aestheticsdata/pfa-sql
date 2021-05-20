"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("@components/spendings/actions");
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var react_redux_1 = require("react-redux");
var react_1 = require("react");
var selectors_1 = __importDefault(require("@components/spendings/selectors"));
var useSpendingsHelpers = function () {
    var _a = react_1.useState(null), month = _a[0], setMonth = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var _b = selectors_1.default(), user = _b.user, dateRange = _b.dateRange;
    var start = startOfMonth_1.default(dateRange.from);
    var getCategories = function () {
        dispatch(actions_1.getCategories());
    };
    var getSpendingsAndRecurring = function () {
        dispatch(actions_1.getSpendings(user, dateRange));
        var start = startOfMonth_1.default(dateRange.from);
        var end = endOfMonth_1.default(dateRange.to);
        setMonth({ start: start, end: end });
    };
    var deleteSpending = function (spendingID) {
        dispatch(actions_1.deleteSpending(spendingID));
    };
    var deleteRecurring = function (recurringID) {
        dispatch(actions_1.deleteRecurring(recurringID));
    };
    var deleteItem = function (itemID, itemType) {
        itemType === 'spending' ?
            deleteSpending(itemID)
            :
                deleteRecurring(itemID);
    };
    var getWeeklyStats = function (start) {
        dispatch(actions_1.getWeeklyStats(start));
    };
    return {
        month: month,
        start: start,
        getCategories: getCategories,
        getSpendingsAndRecurring: getSpendingsAndRecurring,
        deleteSpending: deleteSpending,
        deleteRecurring: deleteRecurring,
        deleteItem: deleteItem,
        getWeeklyStats: getWeeklyStats,
    };
};
exports.default = useSpendingsHelpers;
