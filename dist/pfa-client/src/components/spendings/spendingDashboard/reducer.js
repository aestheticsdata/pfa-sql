"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var constants_1 = require("./constants");
var constants_2 = require("@components/spendings/constants");
var initialState = {
    initialAmount: 0,
    ceiling: 0,
    totalSpendingsOfMonth: 0,
    remaining: 0,
    dashboardID: null,
    weeklyStats: [],
};
var dashboardReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return immer_1.default(state, function (draft) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        switch (action.type) {
            case constants_1.GET_INITIAL_AMOUNT_SUCCESS:
                var totalSpendingsOfMonth = 0;
                var spendingsSum = (_d = (_c = (_b = (_a = action.monthlyBudget) === null || _a === void 0 ? void 0 : _a.spendingsSum) === null || _b === void 0 ? void 0 : _b.sum) === null || _c === void 0 ? void 0 : _c.amount) !== null && _d !== void 0 ? _d : 0;
                var recurringsSum = (_h = (_g = (_f = (_e = action.monthlyBudget) === null || _e === void 0 ? void 0 : _e.recurringsSum) === null || _f === void 0 ? void 0 : _f.sum) === null || _g === void 0 ? void 0 : _g.amount) !== null && _h !== void 0 ? _h : 0;
                var initialAmount = (_k = (_j = action.data) === null || _j === void 0 ? void 0 : _j.initialAmount) !== null && _k !== void 0 ? _k : 0;
                totalSpendingsOfMonth = parseFloat(spendingsSum) + parseFloat(recurringsSum);
                draft.initialAmount = parseFloat(initialAmount);
                draft.totalSpendingsOfMonth = totalSpendingsOfMonth;
                draft.remaining = initialAmount - totalSpendingsOfMonth;
                draft.dashboardID = (_l = action.data) === null || _l === void 0 ? void 0 : _l.ID;
                draft.ceiling = (_o = (_m = action.data) === null || _m === void 0 ? void 0 : _m.initialCeiling) !== null && _o !== void 0 ? _o : 0;
                break;
            case constants_2.GET_WEEKLY_STATS_SUCCESS:
                draft.weeklyStats = action.weeklyStats;
                break;
            case constants_1.SET_INITIAL_CEILING_SUCCESS:
                draft.ceiling = action.data.initialCeiling;
                break;
            default:
                return state;
        }
    });
};
exports.default = dashboardReducer;
