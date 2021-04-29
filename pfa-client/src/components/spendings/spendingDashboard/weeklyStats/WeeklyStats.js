import {
  FormattedMessage,
  FormattedNumber
} from "react-intl";
import messages from "@components/spendings/messages";
import StyledWeeklyStats from "@components/spendings/spendingDashboard/weeklyStats/StyledWeeklyStats";
import { useSelector } from "react-redux";
import localesDates from "@src/i18n/locales-dates";
import Cookie from "js-cookie";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";


const WeeklyStats = ({ weekTotal }) => {
  const user = useSelector(state => state.loginReducer.user);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);

  return (
    <StyledWeeklyStats>
      <div className="header">
        <div>
          <FormattedMessage {...messages.totalsByDayRange} />
        </div>
        <div className="date">
          <span className="month">{localesDates[Cookie.get('lang')].MONTHS[getMonth(dateRange.to)]}</span>
          <span className="year">{getYear(dateRange.to)}</span>
        </div>
      </div>
      <FormattedMessage { ...messages.currentWeekTotal } />:
      {
        weekTotal && (
          <FormattedNumber
            value={weekTotal}
            style="currency"
            currency={user.baseCurrency}
          />
        )
      }
    </StyledWeeklyStats>
  )
}

export default WeeklyStats;
