"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = __importDefault(require("immer"));
var getDate_1 = __importDefault(require("date-fns/getDate"));
var parseISO_1 = __importDefault(require("date-fns/parseISO"));
var lodash_1 = __importDefault(require("lodash"));
var date_fns_1 = require("date-fns");
var constants_1 = require("./constants");
var tempArr = [];
tempArr.total = 0;
var spendingsPlaceholder = [tempArr, tempArr, tempArr, tempArr, tempArr, tempArr, tempArr];
var initialState = {
    spendings: spendingsPlaceholder,
    recurrings: [],
    categories: [],
    currency: 'EUR',
    isLoading: true,
};
// transform an array of object into an array of array<Object> aggregated
// by same date
// const aggregateSpendingByDate = (spendings, range, exchangeRates, baseCurrency) => {
var aggregateSpendingByDate = function (spendings, range) {
    var spendingsFinal = __spreadArray([], spendingsPlaceholder);
    for (var j = 0, r = range.length; j < r; j += 1) {
        var arr = [];
        arr.total = 0;
        arr.date = getDate_1.default(range[j]);
        spendingsFinal[j] = arr;
    }
    for (var i = 0, l = spendings.length; i < l; i += 1) {
        for (var k = 0, ll = spendingsFinal.length; k < ll; k += 1) {
            if (getDate_1.default(parseISO_1.default(spendings[i].date)) === spendingsFinal[k].date) {
                spendingsFinal[k].push(spendings[i]);
                spendingsFinal[k].total += parseFloat(spendings[i].amount);
            }
        }
    }
    return spendingsFinal;
};
// update invoice file to sync icon status color
var setInvoicefile = function (state, spendingOrRecurring, status) {
    var outerIndex = 0;
    var innerIndex = 0;
    var savedInnerIndex = 0;
    var itemType = spendingOrRecurring.itemType;
    var spendingsClone = lodash_1.default.cloneDeep(state[itemType + 's']);
    // destructuring array will not copy attributes like [].total
    spendingsClone.total = state[itemType + 's'].total;
    // //////////////////////////////////////////////////////////
    if (itemType === 'spending') {
        for (var _i = 0, _a = spendingsClone.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], i = _b[0], arr = _b[1];
            arr.total = state.spendings[i].total;
            innerIndex = lodash_1.default.findIndex(arr, function (o) { return o.ID === spendingOrRecurring.ID; });
            if (innerIndex !== -1) {
                savedInnerIndex = innerIndex;
                outerIndex = i;
            }
        }
    }
    if (status === 'delete') {
        if (itemType === 'recurring') {
            spendingsClone[lodash_1.default.findIndex(spendingsClone, function (o) { return o.ID === spendingOrRecurring.ID; })].invoicefile = null;
        }
        else {
            spendingsClone[outerIndex][savedInnerIndex].invoicefile = null;
        }
    }
    if (status === 'create') {
        var dateFormat = 'yyyy-MM-dd';
        var date = void 0;
        var stringToHyphen = function (s) { return s.replaceAll(' ', '-'); };
        date = date_fns_1.format(new Date(itemType === 'spending' ? spendingOrRecurring.date : spendingOrRecurring.dateFrom), dateFormat);
        var filename = itemType + '-' + stringToHyphen(spendingOrRecurring.label) + '-' + date + '-r.jpeg';
        if (itemType === 'recurring') {
            spendingsClone[lodash_1.default.findIndex(spendingsClone, function (o) { return o.ID === spendingOrRecurring.ID; })].invoicefile = filename;
        }
        else {
            spendingsClone[outerIndex][savedInnerIndex].invoicefile = filename;
        }
    }
    return spendingsClone;
};
var spendingsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return immer_1.default(state, function (draft) {
        switch (action.type) {
            case constants_1.GET_SPENDINGS:
                draft.isLoading = true;
                break;
            case constants_1.GET_SPENDINGS_SUCCESS:
                draft.isLoading = false;
                draft.spendings = aggregateSpendingByDate(action.spendings, action.dateRange);
                break;
            case constants_1.GET_RECURRING_SUCCESS:
                draft.recurrings = action.recurrings;
                break;
            case constants_1.GET_CATEGORIES_SUCCESS:
                draft.categories = action.categories;
                break;
            case constants_1.UPDATE_INVOICEFILE_REDUCER_STATUS:
                draft[action.spending.itemType + 's'] = setInvoicefile(state, action.spending, action.status);
                break;
            default:
                return state;
        }
    });
};
exports.default = spendingsReducer;
