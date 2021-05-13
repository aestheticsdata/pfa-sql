import SpendingDayItem from '@components/spendings/spendingDayItem/SpendingDayItem';
import StyledSpendingDashboard from '@components/spendings/spendingDashboard/StyledSpendingDashboard';

import MonthlyBudget from '@components/spendings/spendingDashboard/monthlyBudget/MonthlyBudget';
import WeeklyStats from "@components/spendings/spendingDashboard/weeklyStats/WeeklyStats";
import WeeklyCharts from "@components/spendings/spendingDashboard/weeklyCharts/WeeklyCharts";
import MonthlyCharts from "@components/spendings/spendingDashboard/monthlyCharts/MonthlyCharts";


const SpendingDashboard = ({
  recurring,
  user,
  month,
  deleteRecurring,
  isLoading,
}) => {
  return (
    <StyledSpendingDashboard>
      <div className="weekly-stats">
        <WeeklyStats />
      </div>
      <div className="monthly-budget">
        <MonthlyBudget
          user={user}
        />
      </div>
      <div className="monthly-charts">
        <MonthlyCharts />
      </div>
      <div className="weekly-charts">
        <WeeklyCharts />
      </div>
      <div className="recurring-spendings-container">
        <SpendingDayItem
          spendingsByDay={recurring}
          total={0}
          isLoading={isLoading}
          user={user}
          deleteSpending={deleteRecurring}
          recurringType
          month={month}
        />
      </div>
    </StyledSpendingDashboard>
  )
}

export default SpendingDashboard;
