"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var query_string_1 = __importDefault(require("query-string"));
var react_day_picker_1 = __importDefault(require("react-day-picker"));
require("react-day-picker/lib/style.css");
var locales_dates_1 = __importDefault(require("@src/i18n/locales-dates"));
var StyledDatePickerWrapper_1 = __importDefault(require("./StyledDatePickerWrapper"));
var helpers_1 = require("./helpers");
var lang_1 = require("@helpers/lang");
var use_onclickoutside_1 = __importDefault(require("use-onclickoutside"));
var useDatePickerState_1 = __importDefault(require("@components/datePickerWrapper/helpers/useDatePickerState"));
var DatePickerWrapper = function () {
    var _a = useDatePickerState_1.default(), isCalendarVisible = _a.isCalendarVisible, hoverRange = _a.hoverRange, selectedDays = _a.selectedDays, toggleCalendar = _a.toggleCalendar, handleClickOutside = _a.handleClickOutside, handleDayChange = _a.handleDayChange, handleDayEnter = _a.handleDayEnter, handleDayLeave = _a.handleDayLeave;
    var lang = react_1.useState(lang_1.getLang())[0];
    var ref = react_1.useRef(null);
    var daysAreSelected = selectedDays.length > 0;
    var modifiers = {
        hoverRange: hoverRange,
        selectedRange: daysAreSelected && {
            from: selectedDays[0],
            to: selectedDays[selectedDays.length - 1],
        },
        hoverRangeStart: hoverRange && hoverRange.from,
        hoverRangeEnd: hoverRange && hoverRange.to,
        selectedRangeStart: daysAreSelected && selectedDays[0],
        selectedRangeEnd: daysAreSelected && selectedDays[selectedDays.length - 1],
    };
    use_onclickoutside_1.default(ref, handleClickOutside);
    react_1.useEffect(function () {
        var currentDate = query_string_1.default.parse(window.location.search).currentDate;
        currentDate ? handleDayChange(new Date(currentDate)) : handleDayChange(new Date());
    }, []);
    return (<StyledDatePickerWrapper_1.default ref={ref}>
      <div className="caption" onClick={toggleCalendar}>
        {selectedDays.length > 0 ?
            <div>
              {helpers_1.getFormattedDate(selectedDays[0], lang)} –{' '}
              {helpers_1.getFormattedDate(selectedDays[selectedDays.length - 1], lang)}
            </div>
            :
                <div>dates</div>}
      </div>
      <div className="date-picker">
        {isCalendarVisible ?
            <react_day_picker_1.default initialMonth={selectedDays[0]} months={locales_dates_1.default[lang].MONTHS} weekdaysLong={locales_dates_1.default[lang].WEEKDAYS_LONG} weekdaysShort={locales_dates_1.default[lang].WEEKDAYS_SHORT} selectedDays={selectedDays} showWeekNumbers={false} showOutsideDays={false} modifiers={modifiers} onDayClick={handleDayChange} onDayMouseEnter={handleDayEnter} onDayMouseLeave={handleDayLeave} onWeekClick={function () { }}/>
            :
                null}
      </div>
    </StyledDatePickerWrapper_1.default>);
};
exports.default = DatePickerWrapper;
