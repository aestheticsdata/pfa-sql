import StyledChartsContainer from "@components/spendings/spendingDashboard/common/StyledChartsContainer";
import { useIntl } from 'react-intl';
import messages from "@components/spendings/messages";
import { MONTHLY } from "@components/spendings/spendingDashboard/common/widgetHeaderConstants";
import { useSelector } from "react-redux";
import Charts from "@components/spendings/spendingDashboard/charts/Charts";
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

const MonthlyCharts = () => {
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const user = useSelector(state => state.loginReducer.user);
  const startDate = startOfMonth(dateRange.from);
  const endDate = endOfMonth(dateRange.from);
  const url = `/spendings/charts?userID=${user.id}&from=${startDate}&to=${endDate}`;
  const intl = useIntl();

  return (
    <StyledChartsContainer>
      <Charts
        url={url}
        currency={user.baseCurrency}
        title={intl.formatMessage({...messages.amountByCategoriesMonthlyChartsTitle})}
        periodType={MONTHLY}
      />
    </StyledChartsContainer>
  );
};

export default MonthlyCharts;
