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
var effects_1 = require("redux-saga/effects");
var requestHelper_1 = require("@helpers/requestHelper");
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var constants_1 = require("./constants");
var actions_1 = require("./actions");
var swalHelper_1 = require("@helpers/swalHelper");
var index_1 = require("@src/index");
var messages_1 = __importDefault(require("../messages"));
var monthlyStatHelper_1 = __importDefault(require("@components/spendings/helpers/monthlyStatHelper"));
function onGetInitialAmout(payload) {
    var userID, res, monthlyStats, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                userID = JSON.parse(localStorage.getItem('pfa-user')).id;
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/dashboard?userID=" + userID + "&start=" + startOfMonth_1.default(payload.fromAsWeekStart))];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/monthlystats?userID=" + userID + "&from=" + payload.fromAsWeekStart)];
            case 2:
                monthlyStats = _a.sent();
                return [4 /*yield*/, effects_1.put(actions_1.getInitialAmountSuccess(res.data, monthlyStats.data))];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.log('error while getting initial amount : ', err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function onSetInitialAmount(payload) {
    var res, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, '/dashboard', {
                        method: 'POST',
                        data: __assign({ userID: payload.userID, amount: payload.amount }, payload.month)
                    })];
            case 1:
                res = _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.initialAmountSetSuccess)) });
                return [4 /*yield*/, monthlyStatHelper_1.default(res, payload)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log('Error setting initial amount', err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function onUpdateInitialAmount(payload) {
    var res, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/dashboard/" + payload.dashboardID, {
                        method: 'PUT',
                        data: {
                            userID: payload.userID,
                            amount: payload.amount,
                        },
                    })];
            case 1:
                res = _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.initialAmountSetSuccess)) });
                return [4 /*yield*/, monthlyStatHelper_1.default(res, payload)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.log('Error setting initial amount', err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function onSetInitialCeiling(payload) {
    var res, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, effects_1.call(requestHelper_1.privateRequest, "/dashboard/" + payload.dashboardID, {
                        method: 'PUT',
                        data: __assign({ userID: payload.userID, ceiling: payload.ceiling }, payload.month)
                    })];
            case 1:
                res = _a.sent();
                swalHelper_1.displayPopup({ text: index_1.intl.formatMessage(__assign({}, messages_1.default.initialCeilingSetSuccess)) });
                return [4 /*yield*/, effects_1.put(actions_1.setInitialCeilingSuccess(res.data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}
function defaultSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(constants_1.GET_INITIAL_AMOUNT, onGetInitialAmout)];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.SET_INITIAL_AMOUNT, onSetInitialAmount)];
            case 2:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.UPDATE_INITIAL_AMOUNT, onUpdateInitialAmount)];
            case 3:
                _a.sent();
                return [4 /*yield*/, effects_1.takeLatest(constants_1.SET_INITIAL_CEILING, onSetInitialCeiling)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = defaultSaga;
