"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("@components/spendings/messages"));
var formik_1 = require("formik");
var StyledMonthlyBudget_1 = __importDefault(require("./StyledMonthlyBudget"));
var locales_dates_1 = __importDefault(require("@src/i18n/locales-dates"));
var actions_1 = require("../actions");
var startOfMonth_1 = __importDefault(require("date-fns/startOfMonth"));
var endOfMonth_1 = __importDefault(require("date-fns/endOfMonth"));
var format_1 = __importDefault(require("date-fns/format"));
var getMonth_1 = __importDefault(require("date-fns/getMonth"));
var getYear_1 = __importDefault(require("date-fns/getYear"));
var js_cookie_1 = __importDefault(require("js-cookie"));
var MonthlyBudget = function () {
    var _a = react_1.useState(false), isInputVisible = _a[0], setIsInputVisible = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var user = react_redux_1.useSelector(function (state) { return state.loginReducer.user; });
    var dateRange = react_redux_1.useSelector(function (state) { return state.dateRangeReducer.dateRange; });
    var initialAmount = react_redux_1.useSelector(function (state) { return state.dashboardReducer.initialAmount; });
    var remaining = react_redux_1.useSelector(function (state) { return state.dashboardReducer.remaining; });
    var totalSpendingsOfMonth = react_redux_1.useSelector(function (state) { return state.dashboardReducer.totalSpendingsOfMonth; });
    var dashboardID = react_redux_1.useSelector(function (state) { return state.dashboardReducer.dashboardID; });
    var onSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        var formattedMonth = {
            start: format_1.default(startOfMonth_1.default(dateRange.from), 'yyyy-MM-dd'),
            end: format_1.default(endOfMonth_1.default(dateRange.to), 'yyyy-MM-dd'),
        };
        dashboardID ?
            dispatch(actions_1.updateInitialAmount(dashboardID, user.id, values.initialAmount))
            :
                dispatch(actions_1.setInitialAmount(user.id, values.initialAmount, formattedMonth));
        setIsInputVisible(false);
        setSubmitting(false);
    };
    var getField = function (el) {
        if (isInputVisible && el) {
            el.focus();
        }
    };
    var getInitialAmount = function () {
        var start = startOfMonth_1.default(dateRange.from);
        dispatch(actions_1.getInitialAmount(start, dateRange.from, dateRange.to));
    };
    react_1.useEffect(function () {
        // if (user.id && dateRange.from) {
        // needed when coming from login but causes a 404 with componentDidUpadte. Is it still relevant with useEffect ?
        getInitialAmount();
        // }
    }, [dateRange]);
    return (<StyledMonthlyBudget_1.default>
      <div className="date">
        <div className="month">{locales_dates_1.default[js_cookie_1.default.get('lang')].MONTHS[getMonth_1.default(dateRange.to)]}</div>
        <div className="year">{getYear_1.default(dateRange.to)}</div>
      </div>
      <div className="initial-amount">
        <div className="label">
          <react_intl_1.FormattedMessage {...messages_1.default.initialAmount}/> :
        </div>
        {!isInputVisible ?
            <div className="amount-input value" onClick={function () { return setIsInputVisible(true); }}>
              {/* eslint-disable react/style-prop-object */}
              <react_intl_1.FormattedNumber value={initialAmount} style="currency" currency={user.baseCurrency}/>
            </div>
            :
                <formik_1.Formik initialValues={{ initialAmount: initialAmount }} onSubmit={onSubmit}>
              {function (_a) {
                        var errors = _a.errors;
                        return (<formik_1.Form onBlur={function () { return setIsInputVisible(false); }}>
                  <formik_1.Field type="text" name="initialAmount" placeholder="initialAmount" innerRef={function (el) { return getField(el); }}/>
                </formik_1.Form>);
                    }}
            </formik_1.Formik>}
      </div>

      <div className={"remaining-budget " + (remaining < 0 && 'warning')}>
        <div className="label">
          <react_intl_1.FormattedMessage {...messages_1.default.remaining}/>
        </div>
        <div className={"value " + (remaining < 0 && 'warning')}>
          <react_intl_1.FormattedNumber value={remaining} style="currency" currency={user.baseCurrency}/>
        </div>
      </div>

      <div className="month-total">
        <div className="label">
          <react_intl_1.FormattedMessage {...messages_1.default.totalSpendingsOfMonth}/>
        </div>
        <div className="value">
          <react_intl_1.FormattedNumber value={totalSpendingsOfMonth} style="currency" currency={user.baseCurrency}/>
        </div>
      </div>

    </StyledMonthlyBudget_1.default>);
};
exports.default = MonthlyBudget;
