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
var StyledChartsContainer_1 = __importDefault(require("@components/spendings/spendingDashboard/common/StyledChartsContainer"));
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("@components/spendings/messages"));
var widgetHeaderConstants_1 = require("@components/spendings/spendingDashboard/common/widgetHeaderConstants");
var react_redux_1 = require("react-redux");
var Charts_1 = __importDefault(require("@components/spendings/spendingDashboard/charts/Charts"));
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var MonthlyCharts = function () {
    var dateRange = react_redux_1.useSelector(function (state) { return state.dateRangeReducer.dateRange; });
    var user = react_redux_1.useSelector(function (state) { return state.loginReducer.user; });
    var startDate = startOfMonth_1.default(dateRange.from);
    var endDate = endOfMonth_1.default(dateRange.from);
    var url = "/spendings/charts?userID=" + user.id + "&from=" + startDate + "&to=" + endDate;
    var intl = react_intl_1.useIntl();
    return (<StyledChartsContainer_1.default>
      <Charts_1.default url={url} currency={user.baseCurrency} title={intl.formatMessage(__assign({}, messages_1.default.amountByCategoriesMonthlyChartsTitle))} periodType={widgetHeaderConstants_1.MONTHLY}/>
    </StyledChartsContainer_1.default>);
};
exports.default = MonthlyCharts;
