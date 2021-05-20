"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCopyRecurring = exports.onDeleteRecurring = exports.onUpdateRecurring = exports.onCreateRecurring = exports.onGetWeeklyStats = exports.onGetRecurring = exports.onGetSpendings = exports.onDeleteSpending = exports.onUpdateSpending = exports.onCreateSpending = exports.onUpdateCategory = exports.onGetCategories = exports.onGetUser = void 0;
var effects_1 = require("redux-saga/effects");
var requestHelper_1 = require("@helpers/requestHelper");
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var format_1 = __importDefault(require("date-fns/format"));
var constants_1 = require("./constants");
var constants_2 = require("@components/categories/constants");
var actions_1 = require("./actions");
var actions_2 = require("@components/categories/actions");
var actions_3 = require("./spendingDashboard/actions");
var swalHelper_1 = require("@helpers/swalHelper");
var index_1 = require("../../index");
var messages_1 = __importDefault(require("./messages"));
function getDashboardAmount() {
    var from;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.from; })];
            case 1:
                from = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_3.getInitialAmount(null, from))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function onGetUser() {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, '/users/all')];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log('Main saga err', err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}
exports.onGetUser = onGetUser;
function onGetCategories() {
    var userID, res, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/categories?userID=" + userID)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getCategoriesSuccess(res.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log('get categories error : ', err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
exports.onGetCategories = onGetCategories;
function onUpdateCategory(payload) {
    var res, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/categories/" + payload.category.ID, {
                        method: 'PUT',
                        data: payload.category,
                    })];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getCategoriesSuccess(res.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                err_3 = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_2.updateCategoryError(err_3.response.data))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.onUpdateCategory = onUpdateCategory;
function onCreateSpending(payload) {
    var dateRange, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, '/spendings', {
                        method: 'POST',
                        data: payload.spending,
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.createSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange; })];
            case 2:
                dateRange = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getSpendings(payload.spending.userID, dateRange))];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getCategories())];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getWeeklyStats(startOfMonth_1.default(dateRange.from)))];
            case 5:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 6:
                _a.sent();
                return [3 /*break*/, 8];
            case 7:
                err_4 = _a.sent();
                console.log('error while creating spending', err_4);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.onCreateSpending = onCreateSpending;
function onUpdateSpending(payload) {
    var userID, dateRange, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/spendings/" + payload.spending.id, {
                        method: 'PUT',
                        data: payload.spending,
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.updateSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange; })];
            case 2:
                dateRange = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getSpendings(userID, dateRange))];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getWeeklyStats(startOfMonth_1.default(dateRange.from)))];
            case 4:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                err_5 = _a.sent();
                console.log(err_5);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
exports.onUpdateSpending = onUpdateSpending;
function onDeleteSpending(payload) {
    var userID, dateRange, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/spendings/" + payload.ID, {
                        method: 'DELETE',
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.deleteSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.loginReducer.user.id; })];
            case 2:
                userID = _a.sent();
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange; })];
            case 3:
                dateRange = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getSpendings(userID, dateRange))];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getWeeklyStats(startOfMonth_1.default(dateRange.from)))];
            case 5:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 6:
                _a.sent();
                return [3 /*break*/, 8];
            case 7:
                err_6 = _a.sent();
                console.log("error while deleting spending :" + err_6);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.onDeleteSpending = onDeleteSpending;
function onGetSpendings(payload) {
    var userID, res, dateRange, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!payload.dateRange.from) return [3 /*break*/, 6];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/spendings?userID=" + userID + "&from=" + payload.dateRange.from + "&to=" + payload.dateRange.to)];
            case 2:
                res = _a.sent();
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.range; })];
            case 3:
                dateRange = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getSpendingsSuccess(res.data, dateRange))];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_7 = _a.sent();
                console.log('error while getting spendings', err_7);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.onGetSpendings = onGetSpendings;
function onGetRecurring(payload) {
    var userID, res, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/recurrings?userID=" + userID + "&start=" + payload.start)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getRecurringSuccess(res.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                console.log('error while getting spendings', err_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
exports.onGetRecurring = onGetRecurring;
function onGetWeeklyStats(payload) {
    var userID, res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/weeklystats?userID=" + userID + "&start=" + payload.start)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getWeeklyStatsSuccess(res.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log('error while getting weekly stats : ', e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
exports.onGetWeeklyStats = onGetWeeklyStats;
function onCreateRecurring(payload) {
    var start, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, '/recurrings', {
                        method: 'POST',
                        data: __assign(__assign({}, payload.recurring), payload.month),
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.createSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.from; })];
            case 2:
                start = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getRecurring(startOfMonth_1.default(start)))];
            case 3:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_9 = _a.sent();
                console.log('error while creating recurring', err_9);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.onCreateRecurring = onCreateRecurring;
function onUpdateRecurring(payload) {
    var start, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/recurrings/" + payload.recurring.id, {
                        method: 'PUT',
                        data: payload.recurring,
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.updateSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.from; })];
            case 2:
                start = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getRecurring(startOfMonth_1.default(start)))];
            case 3:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_10 = _a.sent();
                console.log(err_10);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.onUpdateRecurring = onUpdateRecurring;
function onDeleteRecurring(payload) {
    var start, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/recurrings/" + payload.id, {
                        method: 'DELETE',
                    })];
            case 1:
                _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.deleteSuccess)) });
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.from; })];
            case 2:
                start = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getRecurring(startOfMonth_1.default(start)))];
            case 3:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_11 = _a.sent();
                console.log("error while deleting recurring :" + err_11);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.onDeleteRecurring = onDeleteRecurring;
function onCopyRecurring(payload) {
    var month, start, err_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                month = {
                    start: format_1.default(startOfMonth_1.default(payload.month.start), 'yyyy-MM-dd'),
                    end: format_1.default(endOfMonth_1.default(payload.month.end), 'yyyy-MM-dd'),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/recurrings/copy", {
                        method: 'POST',
                        data: {
                            month: month,
                            userID: payload.userID
                        },
                    })];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.select(function (state) { return state.dateRangeReducer.dateRange.from; })];
            case 3:
                start = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getRecurring(startOfMonth_1.default(start)))];
            case 4:
                _a.sent();
                return [4 /*yield*/, getDashboardAmount()];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                err_12 = _a.sent();
                console.log('err : ', err_12);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}
exports.onCopyRecurring = onCopyRecurring;
function defaultSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_CATEGORIES, onGetCategories)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_2.UPDATE_CATEGORY, onUpdateCategory)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_USERS, onGetUser)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.CREATE_SPENDING, onCreateSpending)];
            case 4:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_SPENDINGS, onGetSpendings)];
            case 5:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.DELETE_SPENDING, onDeleteSpending)];
            case 6:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.UPDATE_SPENDING, onUpdateSpending)];
            case 7:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_RECURRING, onGetRecurring)];
            case 8:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.DELETE_RECURRING, onDeleteRecurring)];
            case 9:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.CREATE_RECURRING, onCreateRecurring)];
            case 10:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.UPDATE_RECURRING, onUpdateRecurring)];
            case 11:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.COPY_RECURRING, onCopyRecurring)];
            case 12:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_WEEKLY_STATS, onGetWeeklyStats)];
            case 13:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = defaultSaga;
