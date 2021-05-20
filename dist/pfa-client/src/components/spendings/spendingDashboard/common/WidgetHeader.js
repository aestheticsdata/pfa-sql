"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locales_dates_1 = __importDefault(require("@src/i18n/locales-dates"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var getMonth_1 = __importDefault(require("date-fns/getMonth"));
var getYear_1 = __importDefault(require("date-fns/getYear"));
var react_redux_1 = require("react-redux");
var helpers_1 = require("@components/datePickerWrapper/helpers");
var lang_1 = require("@helpers/lang");
var widgetHeaderConstants_1 = require("@components/spendings/spendingDashboard/common/widgetHeaderConstants");
var WidgetHeader = function (_a) {
    var title = _a.title, periodType = _a.periodType;
    var dateRange = react_redux_1.useSelector(function (state) { return state.dateRangeReducer.dateRange; });
    return (<div className="header">
      <div className="title">
        {title}
      </div>
      <div className="date">
        {periodType === widgetHeaderConstants_1.MONTHLY ?
            <>
              <span className="month">{locales_dates_1.default[js_cookie_1.default.get('lang')].MONTHS[getMonth_1.default(dateRange.to)]}</span>
              <span className="year">{getYear_1.default(dateRange.to)}</span>
            </>
            :
                <>
              {helpers_1.getFormattedDate(new Date(dateRange.from), lang_1.getLang())} -{' '}
              {helpers_1.getFormattedDate(new Date(dateRange.to), lang_1.getLang())}
            </>}
      </div>
    </div>);
};
exports.default = WidgetHeader;
