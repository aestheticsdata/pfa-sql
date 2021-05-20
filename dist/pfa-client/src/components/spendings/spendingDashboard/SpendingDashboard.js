"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpendingDayItem_1 = __importDefault(require("@components/spendings/spendingDayItem/SpendingDayItem"));
var StyledSpendingDashboard_1 = __importDefault(require("@components/spendings/spendingDashboard/StyledSpendingDashboard"));
var MonthlyBudget_1 = __importDefault(require("@components/spendings/spendingDashboard/monthlyBudget/MonthlyBudget"));
var WeeklyStats_1 = __importDefault(require("@components/spendings/spendingDashboard/weeklyStats/WeeklyStats"));
var WeeklyCharts_1 = __importDefault(require("@components/spendings/spendingDashboard/weeklyCharts/WeeklyCharts"));
var MonthlyCharts_1 = __importDefault(require("@components/spendings/spendingDashboard/monthlyCharts/MonthlyCharts"));
var SpendingDashboard = function (_a) {
    var recurring = _a.recurring, user = _a.user, month = _a.month, deleteRecurring = _a.deleteRecurring, isLoading = _a.isLoading;
    return (<StyledSpendingDashboard_1.default>
      <div className="weekly-stats">
        <WeeklyStats_1.default />
      </div>
      <div className="monthly-budget">
        <MonthlyBudget_1.default user={user}/>
      </div>
      <div className="monthly-charts">
        <MonthlyCharts_1.default />
      </div>
      <div className="weekly-charts">
        <WeeklyCharts_1.default />
      </div>
      <div className="recurring-spendings-container">
        <SpendingDayItem_1.default spendingsByDay={recurring} total={0} isLoading={isLoading} user={user} deleteSpending={deleteRecurring} recurringType month={month}/>
      </div>
    </StyledSpendingDashboard_1.default>);
};
exports.default = SpendingDashboard;
