"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var constants_1 = require("./constants");
var initialState = {
    dateRange: {
        from: null,
        to: null,
        range: null,
    }
};
var dateRangeReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return immer_1.default(state, function (draft) {
        if (action.type === constants_1.DATE_RANGE_CHANGE) {
            draft.dateRange = action.dateRange;
        }
        else {
            return state;
        }
    });
};
exports.default = dateRangeReducer;
