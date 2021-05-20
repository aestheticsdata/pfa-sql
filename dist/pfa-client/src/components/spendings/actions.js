"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeeklyStatsSuccess = exports.getWeeklyStats = exports.updateInvoicefileReducerStatus = exports.copyRecurrings = exports.deleteRecurring = exports.updateRecurring = exports.createRecurring = exports.getRecurringSuccess = exports.getRecurring = exports.getSpendingsSuccess = exports.getSpendings = exports.deleteSpending = exports.updateSpending = exports.createSpending = exports.getCategoriesSuccess = exports.getCategories = exports.getUsers = void 0;
var constants_1 = require("./constants");
var getUsers = function () {
    return {
        type: constants_1.GET_USERS,
    };
};
exports.getUsers = getUsers;
var getCategories = function () {
    return {
        type: constants_1.GET_CATEGORIES,
    };
};
exports.getCategories = getCategories;
var getCategoriesSuccess = function (categories) {
    return {
        type: constants_1.GET_CATEGORIES_SUCCESS,
        categories: categories,
    };
};
exports.getCategoriesSuccess = getCategoriesSuccess;
var createSpending = function (spending) {
    return {
        type: constants_1.CREATE_SPENDING,
        spending: spending,
    };
};
exports.createSpending = createSpending;
var updateSpending = function (spending) {
    return {
        type: constants_1.UPDATE_SPENDING,
        spending: spending,
    };
};
exports.updateSpending = updateSpending;
var deleteSpending = function (spendingID) {
    return {
        type: constants_1.DELETE_SPENDING,
        ID: spendingID
    };
};
exports.deleteSpending = deleteSpending;
var getSpendings = function (user, dateRange) {
    return {
        type: constants_1.GET_SPENDINGS,
        user: user,
        dateRange: dateRange,
    };
};
exports.getSpendings = getSpendings;
var getSpendingsSuccess = function (spendings, dateRange) {
    return {
        type: constants_1.GET_SPENDINGS_SUCCESS,
        spendings: spendings,
        dateRange: dateRange,
    };
};
exports.getSpendingsSuccess = getSpendingsSuccess;
var getRecurring = function (start) {
    return {
        type: constants_1.GET_RECURRING,
        start: start,
    };
};
exports.getRecurring = getRecurring;
var getRecurringSuccess = function (recurrings) {
    return {
        type: constants_1.GET_RECURRING_SUCCESS,
        recurrings: recurrings,
    };
};
exports.getRecurringSuccess = getRecurringSuccess;
var createRecurring = function (recurring, month) {
    return {
        type: constants_1.CREATE_RECURRING,
        recurring: recurring,
        month: month,
    };
};
exports.createRecurring = createRecurring;
var updateRecurring = function (recurring) {
    return {
        type: constants_1.UPDATE_RECURRING,
        recurring: recurring,
    };
};
exports.updateRecurring = updateRecurring;
var deleteRecurring = function (recurringID) {
    return {
        type: constants_1.DELETE_RECURRING,
        id: recurringID,
    };
};
exports.deleteRecurring = deleteRecurring;
var copyRecurrings = function (userID, month) {
    return {
        type: constants_1.COPY_RECURRING,
        userID: userID,
        month: month,
    };
};
exports.copyRecurrings = copyRecurrings;
var updateInvoicefileReducerStatus = function (spending, status) {
    return {
        type: constants_1.UPDATE_INVOICEFILE_REDUCER_STATUS,
        spending: spending,
        status: status,
    };
};
exports.updateInvoicefileReducerStatus = updateInvoicefileReducerStatus;
var getWeeklyStats = function (start) {
    return {
        type: constants_1.GET_WEEKLY_STATS,
        start: start,
    };
};
exports.getWeeklyStats = getWeeklyStats;
var getWeeklyStatsSuccess = function (weeklyStats) {
    return {
        type: constants_1.GET_WEEKLY_STATS_SUCCESS,
        weeklyStats: weeklyStats,
    };
};
exports.getWeeklyStatsSuccess = getWeeklyStatsSuccess;
