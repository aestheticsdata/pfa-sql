import StyledChartsContainer from "@components/spendings/spendingDashboard/common/StyledChartsContainer";
import { useIntl } from 'react-intl';
import Charts from "@components/spendings/spendingDashboard/charts/Charts";
import { useSelector } from "react-redux";
import { WEEKLY } from "@components/spendings/spendingDashboard/common/widgetHeaderConstants";
import messages from "@components/spendings/messages";

const WeeklyCharts = () => {
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const user = useSelector(state => state.loginReducer.user);
  const url = `/spendings/charts?userID=${user.id}&from=${dateRange.from}&to=${dateRange.to}`;
  const intl = useIntl();

  return (
    <StyledChartsContainer>
      <Charts
        url={url}
        currency={user.baseCurrency}
        title={intl.formatMessage({ ...messages.amountByCategoriesWeeklyChartsTitle })}
        periodType={WEEKLY}
      />
    </StyledChartsContainer>
  )
}

export default WeeklyCharts;
