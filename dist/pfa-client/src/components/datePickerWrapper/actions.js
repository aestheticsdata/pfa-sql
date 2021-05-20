"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateRangeChange = void 0;
var constants_1 = require("./constants");
var dateRangeChange = function (dateRange) {
    return {
        type: constants_1.DATE_RANGE_CHANGE,
        dateRange: dateRange,
    };
};
exports.dateRangeChange = dateRangeChange;
