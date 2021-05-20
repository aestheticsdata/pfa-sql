"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = __importDefault(require("lodash"));
var sortConstants_1 = require("@components/spendings/helpers/sortConstants");
var useClickSort = function () {
    var _a = react_1.useState([]), spendingsByDaySorted = _a[0], setSpendingsByDaySorted = _a[1];
    var _b = react_1.useState('asc'), sortOrder = _b[0], setSortOrder = _b[1];
    var onClickSort = function (name) {
        var tempArr = [];
        // array of spending use [].total and [].date, lodash orderBy remove these two keys
        var preserveArrayKeys = (function () {
            var keys = Object.keys(spendingsByDaySorted).filter(function (k) { return isNaN(parseInt(k)); });
            return keys.map(function (k) {
                var _a;
                return (_a = {}, _a[k] = spendingsByDaySorted[k], _a);
            });
        })();
        ///////////////////////////////////////////////////////////////////////////////////
        setSortOrder('asc');
        if (name === sortConstants_1.SORT_BY_LABEL) {
            tempArr = lodash_1.default.orderBy(spendingsByDaySorted, function (o) { return o.label; }, [sortOrder]);
        }
        if (name === sortConstants_1.SORT_BY_CATEGORY) {
            tempArr = lodash_1.default.orderBy(spendingsByDaySorted, function (o) { return o.category; }, [sortOrder]);
        }
        if (name === sortConstants_1.SORT_BY_AMOUNT) {
            tempArr = lodash_1.default.orderBy(spendingsByDaySorted, function (o) { return parseFloat(o.amount); }, [sortOrder]);
        }
        // array of spending use [].total and [].date, lodash orderBy remove these two keys
        for (var _i = 0, preserveArrayKeys_1 = preserveArrayKeys; _i < preserveArrayKeys_1.length; _i++) {
            var i = preserveArrayKeys_1[_i];
            var tempObjKey = Object.keys(i);
            tempArr[tempObjKey] = i[tempObjKey];
        }
        ///////////////////////////////////////////////////////////////////////////////////
        setSpendingsByDaySorted(tempArr);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    return {
        onClickSort: onClickSort,
        spendingsByDaySorted: spendingsByDaySorted,
        setSpendingsByDaySorted: setSpendingsByDaySorted,
    };
};
exports.default = useClickSort;
