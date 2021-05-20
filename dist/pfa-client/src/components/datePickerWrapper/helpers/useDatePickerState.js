"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var formatISO_1 = __importDefault(require("date-fns/formatISO"));
var history_1 = require("@src/history");
var helpers_1 = require("@components/datePickerWrapper/helpers");
var actions_1 = require("@components/datePickerWrapper/actions");
var react_redux_1 = require("react-redux");
var useDatePickerState = function () {
    var _a = react_1.useState(false), isCalendarVisible = _a[0], setIsCalendarVisible = _a[1];
    var _b = react_1.useState(null), hoverRange = _b[0], setHoverRange = _b[1];
    var _c = react_1.useState([]), selectedDays = _c[0], setSelectedDays = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var toggleCalendar = function () {
        setIsCalendarVisible(!isCalendarVisible);
    };
    var handleClickOutside = function () {
        setIsCalendarVisible(false);
    };
    var handleDayChange = function (date) {
        var dateISO = formatISO_1.default(date, { representation: 'date' });
        history_1.history.push('?currentDate=' + dateISO);
        var weekRange = helpers_1.getWeekRange(date);
        var dateRange = helpers_1.getWeekDays(weekRange.from, date);
        dispatch(actions_1.dateRangeChange({
            from: weekRange.from,
            to: weekRange.to,
            range: dateRange,
        }));
        setSelectedDays(dateRange);
        handleClickOutside();
    };
    var handleDayEnter = function (date) {
        setHoverRange(helpers_1.getWeekRange(date));
    };
    var handleDayLeave = function () {
        setHoverRange(null);
    };
    return {
        isCalendarVisible: isCalendarVisible,
        hoverRange: hoverRange,
        selectedDays: selectedDays,
        setHoverRange: setHoverRange,
        setSelectedDays: setSelectedDays,
        toggleCalendar: toggleCalendar,
        handleClickOutside: handleClickOutside,
        handleDayChange: handleDayChange,
        handleDayEnter: handleDayEnter,
        handleDayLeave: handleDayLeave,
    };
};
exports.default = useDatePickerState;
