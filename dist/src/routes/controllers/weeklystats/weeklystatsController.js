"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var prisma = require('../../../db/dbInit');
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var getDay_1 = __importDefault(require("date-fns/getDay"));
var format_1 = __importDefault(require("date-fns/format"));
var getDaysInMonth_1 = __importDefault(require("date-fns/getDaysInMonth"));
var getYear_1 = __importDefault(require("date-fns/getYear"));
var getMonth_1 = __importDefault(require("date-fns/getMonth"));
var weeklystatsController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, start, userID, startDate_1, makeRange, monthSpending, weeklyStats, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, start = _a.start, userID = _a.userID;
                startDate_1 = new Date(start);
                makeRange = function (monthSpending) {
                    var ranges = [];
                    var dayNumberFromMonthStart = getDay_1.default(startDate_1); // Sunday is 0
                    var firstSlice = 7 - dayNumberFromMonthStart;
                    var numberOfDaysInMonth = getDaysInMonth_1.default(startDate_1);
                    ranges.push(firstSlice);
                    var numberOfFullWeeks = Math.floor((numberOfDaysInMonth - firstSlice) / 7);
                    for (var i = 0, l = numberOfFullWeeks; i < l; i += 1) {
                        ranges.push(7);
                    }
                    var remainingNumberOfDays = numberOfDaysInMonth - (firstSlice + (7 * numberOfFullWeeks));
                    remainingNumberOfDays !== 0 && ranges.push(remainingNumberOfDays);
                    var totalsByWeek = [];
                    var dayShifter = 0;
                    for (var slice_i = 0, l = ranges.length; slice_i < l; slice_i += 1) {
                        totalsByWeek[slice_i] = 0;
                        var tempTotal = 0;
                        var _loop_1 = function (day_of_slice_i, n) {
                            var spendingByDay = monthSpending.filter(function (o) {
                                return format_1.default(o.date, 'yyyy-MM-dd') === format_1.default(new Date(getYear_1.default(startDate_1), getMonth_1.default(startDate_1), (day_of_slice_i + 1) + dayShifter), 'yyyy-MM-dd');
                            });
                            tempTotal = spendingByDay.reduce(function (acc, curr) { return acc + +curr.amount; }, 0); // cast +curr.amount because amount which a number is seen as an object, dunno why...
                            if (spendingByDay.length !== 0) {
                                totalsByWeek[slice_i] += tempTotal;
                            }
                        };
                        for (var day_of_slice_i = 0, n = ranges[slice_i]; day_of_slice_i < n; day_of_slice_i += 1) {
                            _loop_1(day_of_slice_i, n);
                        }
                        dayShifter += ranges[slice_i];
                    }
                    return totalsByWeek;
                };
                return [4 /*yield*/, prisma.spendings.findMany({
                        where: {
                            AND: [
                                { userID: userID },
                                {
                                    date: {
                                        gte: startDate_1,
                                        lte: endOfMonth_1.default(startDate_1),
                                    },
                                },
                            ]
                        }
                    })];
            case 1:
                monthSpending = _b.sent();
                weeklyStats = makeRange(monthSpending);
                res.status(200).json(weeklyStats);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                res.status(500).json({ msg: 'weeklyStats error : ' + e_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports = weeklystatsController;
