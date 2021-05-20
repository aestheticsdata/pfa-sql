"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInitialCeilingSuccess = exports.setInitialCeiling = exports.updateInitialAmount = exports.setInitialAmount = exports.getInitialAmountSuccess = exports.getInitialAmount = void 0;
var constants_1 = require("./constants");
var getInitialAmount = function (start, fromAsWeekStart, toAsWeekEnd) {
    return {
        type: constants_1.GET_INITIAL_AMOUNT,
        start: start,
        fromAsWeekStart: fromAsWeekStart,
        toAsWeekEnd: toAsWeekEnd,
    };
};
exports.getInitialAmount = getInitialAmount;
var getInitialAmountSuccess = function (data, monthlyBudget) {
    return {
        type: constants_1.GET_INITIAL_AMOUNT_SUCCESS,
        data: data,
        monthlyBudget: monthlyBudget,
    };
};
exports.getInitialAmountSuccess = getInitialAmountSuccess;
var setInitialAmount = function (userID, amount, month) {
    return {
        type: constants_1.SET_INITIAL_AMOUNT,
        userID: userID,
        amount: amount,
        month: month,
    };
};
exports.setInitialAmount = setInitialAmount;
var updateInitialAmount = function (dashboardID, userID, amount) {
    return {
        type: constants_1.UPDATE_INITIAL_AMOUNT,
        userID: userID,
        dashboardID: dashboardID,
        amount: amount,
    };
};
exports.updateInitialAmount = updateInitialAmount;
var setInitialCeiling = function (dashboardID, userID, ceiling, month) {
    return {
        type: constants_1.SET_INITIAL_CEILING,
        userID: userID,
        dashboardID: dashboardID,
        ceiling: ceiling,
        month: month,
    };
};
exports.setInitialCeiling = setInitialCeiling;
var setInitialCeilingSuccess = function (data) {
    return {
        type: constants_1.SET_INITIAL_CEILING_SUCCESS,
        data: data,
    };
};
exports.setInitialCeilingSuccess = setInitialCeilingSuccess;
