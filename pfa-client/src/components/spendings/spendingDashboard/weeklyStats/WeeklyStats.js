import {FormattedMessage, FormattedNumber} from "react-intl";
import messages from "@components/spendings/messages";
import StyledWeeklyStats from "@components/spendings/spendingDashboard/weeklyStats/StyledWeeklyStats";
import {useSelector} from "react-redux";
import localesDates from "@src/i18n/locales-dates";
import Cookie from "js-cookie";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltDown, faLongArrowAltUp,} from "@fortawesome/free-solid-svg-icons";
import getDay from "date-fns/getDay";
import getDaysInMonth from "date-fns/getDaysInMonth";
import startOfMonth from "date-fns/startOfMonth";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import getDate from "date-fns/getDate";

import {v1 as uuidv1} from 'uuid';


const makeRange = (dateRange) => {
  const ranges = [];
  const startDate = startOfMonth(dateRange.from);
  const dayNumberFromMonthStart = getDay(startDate); // Sunday is 0
  const firstSlice = 7 - dayNumberFromMonthStart;
  const numberOfDaysInMonth = getDaysInMonth(startDate)
  ranges.push(firstSlice);
  const numberOfFullWeeks = Math.floor((numberOfDaysInMonth - firstSlice) / 7);
  for (let i = 0, l = numberOfFullWeeks; i < l; i += 1) {
    ranges.push(7);
  }
  const remainingNumberOfDays = numberOfDaysInMonth - (firstSlice + (7 * numberOfFullWeeks));
  remainingNumberOfDays !== 0 && ranges.push(remainingNumberOfDays);

  return ranges;
}

const getSliceDates = (idx, ranges) => {
  const getSumDays = i => ranges.slice(0, i + 1).reduce((acc, curr) => acc + curr);
  const sliceStart = idx === 0 ? 1 : getSumDays(idx - 1) + 1;
  const sliceEnd = getSumDays(idx);

  return sliceStart === sliceEnd ? sliceStart : `${sliceStart} - ${sliceEnd}`;
}

const makeSlices = ranges => {
  const slices = [];
  for (let i = 0, l = ranges.length; i < l; i += 1) {
    slices.push(getSliceDates(i, ranges));
  }
  return slices;
}

const isCurrentWeek = (slice, dateRange) => +(slice.split(' - ')[0]) === getDate(dateRange.from);


const WeeklyStats = () => {
  const user = useSelector(state => state.loginReducer.user);
  const weeklyStats = useSelector(state => state.dashboardReducer.weeklyStats);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const ranges = makeRange(dateRange);
  const weeklySlices = makeSlices(ranges);
  const ceiling = 150; // hardcoded, TODO: input

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
        <span className="ceiling-amount">
          <FormattedNumber
            value={ceiling}
            style="currency"
            currency={user.baseCurrency}
          />
        </span>
      </div>
      {
        weeklyStats ?
          weeklyStats.map((weekSliceValue, i) =>
            <div
              key={uuidv1()}
              className={isCurrentWeek(weeklySlices[i], dateRange) ? 'current-week' : ''}
            >
              {isCurrentWeek(weeklySlices[i], dateRange)}
              <span>
                {weeklySlices[i]} :
              </span>
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
