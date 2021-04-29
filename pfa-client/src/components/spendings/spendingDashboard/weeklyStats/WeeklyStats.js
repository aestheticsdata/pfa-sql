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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";

const WeeklyStats = () => {
  const user = useSelector(state => state.loginReducer.user);
  const weeklyStats = useSelector(state => state.dashboardReducer.weeklyStats);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const ceiling = 150; // hardcoded

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
      <div className="ceiling">
        <FormattedMessage {...messages.ceiling} />
        <span className="ceiling-amount">{ceiling}</span>
      </div>
      {
        weeklyStats ?
          weeklyStats.map((weekSliceValue, i) =>
            <div key={Math.floor(Math.random()*100)}>
              <span>tranche {i}: </span>
              {
                weekSliceValue > ceiling ?
                  <FontAwesomeIcon
                    icon={faLongArrowAltUp}
                    className="arrow up"
                  />
                  :
                  <FontAwesomeIcon
                    icon={faLongArrowAltDown}
                    className="arrow down"
                  />
              }
              <FormattedNumber
                value={weekSliceValue}
                style="currency"
                currency={user.baseCurrency}
              />
            </div>
          )
        :
        null
      }
    </StyledWeeklyStats>
  )
}

export default WeeklyStats;
