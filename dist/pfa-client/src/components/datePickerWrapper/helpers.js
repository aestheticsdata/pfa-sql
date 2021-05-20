"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedDate = exports.getWeekRange = exports.getWeekDays = void 0;
var addDays_1 = __importDefault(require("date-fns/addDays"));
var startOfWeek_1 = __importDefault(require("date-fns/startOfWeek"));
var endOfWeek_1 = __importDefault(require("date-fns/endOfWeek"));
var subDays_1 = __importDefault(require("date-fns/subDays"));
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var isSameMonth_1 = __importDefault(require("date-fns/isSameMonth"));
var getDate_1 = __importDefault(require("date-fns/getDate"));
var getDay_1 = __importDefault(require("date-fns/getDay"));
var lastDayOfMonth_1 = __importDefault(require("date-fns/lastDayOfMonth"));
var setHours_1 = __importDefault(require("date-fns/setHours"));
var format_1 = __importDefault(require("date-fns/format"));
var lang_1 = require("@helpers/lang");
var getWeekDays = function (weekStart, date) {
    var days = [weekStart];
    if (!isSameMonth_1.default(startOfWeek_1.default(date), date) || !isSameMonth_1.default(endOfWeek_1.default(date), date)) {
        if (getDate_1.default(date) > 15) {
            for (var i = 1; i <= getDay_1.default(lastDayOfMonth_1.default(date)); i += 1) {
                days.push(addDays_1.default(weekStart, i));
            }
        }
        else {
            for (var i = 1; i <= (6 - getDay_1.default(weekStart)); i += 1) {
                days.push(addDays_1.default(weekStart, i));
            }
        }
    }
    else {
        for (var i = 1; i < 7; i += 1) {
            days.push(addDays_1.default(weekStart, i));
        }
    }
    return days;
};
exports.getWeekDays = getWeekDays;
var getWeekRange = function (date) {
    var dateRange;
    if (!isSameMonth_1.default(startOfWeek_1.default(date), date) || !isSameMonth_1.default(endOfWeek_1.default(date), date)) {
        if (getDate_1.default(date) > 15) {
            dateRange = {
                // setHours force the 'from" to be at midnight and not noon
                from: setHours_1.default(subDays_1.default(date, getDay_1.default(date)), 0),
                to: lastDayOfMonth_1.default(date),
            };
        }
        else {
            dateRange = {
                from: startOfMonth_1.default(date),
                to: endOfWeek_1.default(date),
            };
        }
    }
    else {
        dateRange = {
            from: startOfWeek_1.default(date),
            to: endOfWeek_1.default(date),
        };
    }
    return dateRange;
};
exports.getWeekRange = getWeekRange;
var getFormattedDate = function (date, lang) {
    return format_1.default(date, lang_1.locales[lang].formatString, { locale: lang_1.locales[lang][lang] });
};
exports.getFormattedDate = getFormattedDate;
