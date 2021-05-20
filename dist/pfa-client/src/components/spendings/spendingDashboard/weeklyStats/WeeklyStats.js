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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_intl_1 = require("react-intl");
var react_intl_2 = require("react-intl");
var messages_1 = __importDefault(require("@components/spendings/messages"));
var formik_1 = require("formik");
var StyledWeeklyStats_1 = __importDefault(require("@components/spendings/spendingDashboard/weeklyStats/StyledWeeklyStats"));
var actions_1 = require("../actions");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var format_1 = __importDefault(require("date-fns/format"));
var getDay_1 = __importDefault(require("date-fns/getDay"));
var getDaysInMonth_1 = __importDefault(require("date-fns/getDaysInMonth"));
var getDate_1 = __importDefault(require("date-fns/getDate"));
var Wedges_3s_200px_svg_1 = require("@src/assets/Wedges-3s-200px.svg");
var uuid_1 = require("uuid");
var WidgetHeader_1 = __importDefault(require("@components/spendings/spendingDashboard/common/WidgetHeader"));
var widgetHeaderConstants_1 = require("@components/spendings/spendingDashboard/common/widgetHeaderConstants");
var makeRange = function (dateRange) {
    var ranges = [];
    var startDate = startOfMonth_1.default(dateRange.from);
    var dayNumberFromMonthStart = getDay_1.default(startDate); // Sunday is 0
    var firstSlice = 7 - dayNumberFromMonthStart;
    var numberOfDaysInMonth = getDaysInMonth_1.default(startDate);
    ranges.push(firstSlice);
    var numberOfFullWeeks = Math.floor((numberOfDaysInMonth - firstSlice) / 7);
    for (var i = 0, l = numberOfFullWeeks; i < l; i += 1) {
        ranges.push(7);
    }
    var remainingNumberOfDays = numberOfDaysInMonth - (firstSlice + (7 * numberOfFullWeeks));
    remainingNumberOfDays !== 0 && ranges.push(remainingNumberOfDays);
    return ranges;
};
var getSliceDates = function (idx, ranges) {
    var getSumDays = function (i) { return ranges.slice(0, i + 1).reduce(function (acc, curr) { return acc + curr; }); };
    var sliceStart = idx === 0 ? 1 : getSumDays(idx - 1) + 1;
    var sliceEnd = getSumDays(idx);
    return sliceStart === sliceEnd ? sliceStart : sliceStart + " - " + sliceEnd;
};
var makeSlices = function (ranges) {
    var slices = [];
    for (var i = 0, l = ranges.length; i < l; i += 1) {
        slices.push(getSliceDates(i, ranges));
    }
    return slices;
};
var isCurrentWeek = function (slice, dateRange) {
    return typeof slice === 'string' ?
        +(slice.split(' - ')[0]) === getDate_1.default(dateRange.from)
        :
            +(slice) === getDate_1.default(dateRange.from);
};
var WeeklyStats = function () {
    var _a = react_1.useState(false), isInputVisible = _a[0], setIsInputVisible = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var user = react_redux_1.useSelector(function (state) { return state.loginReducer.user; });
    var weeklyStats = react_redux_1.useSelector(function (state) { return state.dashboardReducer.weeklyStats; });
    var dateRange = react_redux_1.useSelector(function (state) { return state.dateRangeReducer.dateRange; });
    var initialCeiling = react_redux_1.useSelector(function (state) { return state.dashboardReducer.ceiling; });
    var dashboardID = react_redux_1.useSelector(function (state) { return state.dashboardReducer.dashboardID; });
    var ranges = makeRange(dateRange);
    var weeklySlices = makeSlices(ranges);
    var CEILING_WARN_LIMIT = 50;
    var intl = react_intl_2.useIntl();
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        var formattedMonth = {
            start: format_1.default(startOfMonth_1.default(dateRange.from), 'yyyy-MM-dd'),
            end: format_1.default(endOfMonth_1.default(dateRange.to), 'yyyy-MM-dd'),
        };
        if (dashboardID && values.initialCeiling !== initialCeiling) {
            dispatch(actions_1.setInitialCeiling(dashboardID, user.id, values.initialCeiling, formattedMonth));
        }
        setIsInputVisible(false);
        setSubmitting(false);
    };
    var getField = function (el) {
        if (isInputVisible && el) {
            el.focus();
        }
    };
    return (<StyledWeeklyStats_1.default>
      <WidgetHeader_1.default title={intl.formatMessage(__assign({}, messages_1.default.totalsByDayRange))} periodType={widgetHeaderConstants_1.WEEKLY}/>
      <div className="weekly-stats-body">
        <div className="ceiling">
          <div className="label">
            <react_intl_1.FormattedMessage {...messages_1.default.ceiling}/>
          </div>
          {!isInputVisible ?
            <div className={(dashboardID ? 'on' : 'off') + " ceiling-input value"} onClick={function () { return dashboardID && setIsInputVisible(true); }}>
                {/* eslint-disable react/style-prop-object */}
                <react_intl_1.FormattedNumber value={initialCeiling} style="currency" currency={user.baseCurrency}/>
              </div>
            :
                <formik_1.Formik initialValues={{ initialCeiling: initialCeiling }} onSubmit={onSubmit}>
                {function (_a) {
                        var errors = _a.errors;
                        return (<formik_1.Form onBlur={function () { return setIsInputVisible(false); }}>
                    <formik_1.Field type="text" name="initialCeiling" placeholder="initialCeiling" onKeyDown={function (e) { e.keyCode === 27 && setIsInputVisible(false); }} innerRef={function (el) { return getField(el); }}/>
                  </formik_1.Form>);
                    }}
              </formik_1.Formik>}
        </div>
        <div className="week-slices-container">
        {(weeklyStats === null || weeklyStats === void 0 ? void 0 : weeklyStats.length) > 0 ?
            weeklyStats.map(function (weekSliceValue, i) {
                var ceilingDiff = weekSliceValue - initialCeiling;
                return (<div key={uuid_1.v1()} className={"week-slice " + (isCurrentWeek(weeklySlices[i], dateRange) ? 'current-week' : '')}>
                  {isCurrentWeek(weeklySlices[i], dateRange)}
                  <span className="days-slice">
                    {weeklySlices[i]} :
                  </span>
                  <div className="amount">
                    <react_intl_1.FormattedNumber value={weekSliceValue} style="currency" currency={user.baseCurrency}/>
                  </div>
                  <div className="arrow">
                    {ceilingDiff > 0 ?
                        <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faLongArrowAltUp} className={(ceilingDiff > CEILING_WARN_LIMIT && 'excess') + " arrow up"}/>
                        :
                            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faLongArrowAltDown} className="arrow down"/>}
                  </div>
                  {ceilingDiff > 0 ?
                        <div className={(ceilingDiff > CEILING_WARN_LIMIT && 'excess') + " exceeding-amount"}>
                        +
                        <react_intl_1.FormattedNumber value={ceilingDiff} style="currency" currency={user.baseCurrency}/>
                      </div>
                        :
                            <div className="remaining-amount">
                        <react_intl_1.FormattedNumber value={Math.abs(ceilingDiff)} style="currency" currency={user.baseCurrency}/>
                      </div>}
                </div>);
            })
            :
                <div className="spinner">
            <Wedges_3s_200px_svg_1.ReactComponent width="60px" height="60px"/>
          </div>}
        </div>
      </div>
    </StyledWeeklyStats_1.default>);
};
exports.default = WeeklyStats;
