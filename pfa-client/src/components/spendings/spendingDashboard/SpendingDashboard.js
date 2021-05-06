import SpendingDayItem from '@components/spendings/spendingDayItem/SpendingDayItem';
import StyledSpendingDashboard from '@components/spendings/spendingDashboard/StyledSpendingDashboard';

import MonthlyBudget from '@components/spendings/spendingDashboard/monthlyBudget/MonthlyBudget';
import WeeklyStats from "@components/spendings/spendingDashboard/weeklyStats/WeeklyStats";
import Charts from "@components/spendings/spendingDashboard/charts/Charts";


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
      <div className="charts">
        <Charts
          data={[
            {
              label: 'alimentation',
              value: '120',
              bgcolor: "rgb(200, 30, 188)",
            },
            {
              label: 'loisirs',
              value: '50',
              bgcolor: "rgb(30,166,200)",
            },
            {
              label: 'foo',
              value: '80',
              bgcolor: "rgb(141,200,30)",
            },
            {
              label: 'xyz',
              value: '70',
              bgcolor: "rgb(200,109,30)",
            },
          ]}
        />
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
