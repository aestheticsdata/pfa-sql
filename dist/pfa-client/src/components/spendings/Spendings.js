"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var StyledSpendings_1 = __importDefault(require("./StyledSpendings"));
var SpendingDayItem_1 = __importDefault(require("@components/spendings/spendingDayItem/SpendingDayItem"));
var SpendingDashboard_1 = __importDefault(require("@components/spendings/spendingDashboard/SpendingDashboard"));
var actions_1 = require("./actions");
var selectors_1 = __importDefault(require("./selectors"));
var useSpendingsHelpers_1 = __importDefault(require("@components/spendings/helpers/useSpendingsHelpers"));
var globalContext_1 = __importDefault(require("@src/globalContext"));
var Spendings = function () {
    var _a = useSpendingsHelpers_1.default(), month = _a.month, start = _a.start, getSpendingsAndRecurring = _a.getSpendingsAndRecurring, getCategories = _a.getCategories, deleteRecurring = _a.deleteRecurring, deleteItem = _a.deleteItem, getWeeklyStats = _a.getWeeklyStats;
    var dispatch = react_redux_1.useDispatch();
    var _b = selectors_1.default(), user = _b.user, spendings = _b.spendings, recurrings = _b.recurrings, isLoading = _b.isLoading, dateRange = _b.dateRange;
    var setContext = react_1.useContext(globalContext_1.default).setContext;
    // useEffect(() => {
    //   console.log('dateRange', dateRange);
    //   if (user.id && dateRange.from) {
    //     getSpendingsAndRecurring();
    //     getCategories();
    //   }
    // },[]);
    react_1.useEffect(function () {
        setContext({ displayDatePicker: true });
    }, []);
    react_1.useEffect(function () {
        if (month !== null) {
            dispatch(actions_1.getRecurring(start));
            getWeeklyStats(start);
        }
    }, [month]);
    react_1.useEffect(function () {
        if (user.id && dateRange.from) {
            getSpendingsAndRecurring();
            getCategories();
        }
    }, [dateRange, user]);
    return (<StyledSpendings_1.default>
      <div className="spendings-list">
        {spendings.length > 0 && dateRange.range ?
            <div className="list-container">
              <SpendingDashboard_1.default recurring={recurrings} deleteRecurring={deleteRecurring} month={month} user={user} isLoading={isLoading}/>
              <div className="spendings-container">
                {spendings.map(function (spendingsByDay, i) { return (<SpendingDayItem_1.default key={i} spendingsByDay={spendingsByDay} date={dateRange.range[i]} isLoading={isLoading} user={user} deleteSpending={deleteItem}/>); })}
              </div>
            </div>
            :
                null}
      </div>
    </StyledSpendings_1.default>);
};
exports.default = Spendings;
