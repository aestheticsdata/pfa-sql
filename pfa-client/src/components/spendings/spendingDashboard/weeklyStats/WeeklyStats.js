import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FormattedMessage,
  FormattedNumber,
} from "react-intl";
import { useIntl } from 'react-intl';
import messages from "@components/spendings/messages";

import {
  Formik,
  Form,
  Field,
} from 'formik';

import StyledWeeklyStats from "@components/spendings/spendingDashboard/weeklyStats/StyledWeeklyStats";

import { setInitialCeiling as setInitialCeilingAction } from '../actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';
import getDay from "date-fns/getDay";
import getDaysInMonth from "date-fns/getDaysInMonth";
import getDate from "date-fns/getDate";

import { ReactComponent as Spinner } from "@src/assets/Wedges-3s-200px.svg";

import { v1 as uuidv1 } from 'uuid';
import WidgetHeader from "@components/spendings/spendingDashboard/common/WidgetHeader";
import { WEEKLY } from "@components/spendings/spendingDashboard/common/widgetHeaderConstants";


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

const makeSlices = ranges => ranges.reduce((acc, curr, idx, arr) => {
    acc.push(getSliceDates(idx, arr));
    return acc;
  }, []);

const isCurrentWeek = (slice, dateRange) => {
  return typeof slice === 'string' ?
    +(slice.split(' - ')[0]) === getDate(dateRange.from)
    :
    +(slice) === getDate(dateRange.from);
}



const WeeklyStats = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [averageWeeklyStatsAmount, setAverageWeeklyStatsAmount] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(state => state.loginReducer.user);
  const weeklyStats = useSelector(state => state.dashboardReducer.weeklyStats);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const initialCeiling = useSelector(state => state.dashboardReducer.ceiling);
  const dashboardID = useSelector(state => state.dashboardReducer.dashboardID);
  const ranges = makeRange(dateRange);
  const weeklySlices = makeSlices(ranges);
  const CEILING_WARN_LIMIT = 50;

  const intl = useIntl();

  const onSubmit = (values, { setSubmitting }) => {
    const formattedMonth = {
      start: format(startOfMonth(dateRange.from), 'yyyy-MM-dd'),
      end: format(endOfMonth(dateRange.to), 'yyyy-MM-dd'),
    };
    if (dashboardID && values.initialCeiling !== initialCeiling) {
      dispatch(setInitialCeilingAction(dashboardID, user.id, values.initialCeiling, formattedMonth));
    }
    setIsInputVisible(false);
    setSubmitting(false);
  };

  const getField = (el) => {
    if (isInputVisible && el) {
      el.focus();
    }
  };

  useEffect(() => {
    if (weeklyStats.length > 0) {
      setAverageWeeklyStatsAmount(Math.round(weeklyStats.reduce((acc, curr) => acc + curr, 0) / weeklyStats.length));
    }
  }, [weeklyStats]);

  return (
    <StyledWeeklyStats>
      <WidgetHeader
        title={intl.formatMessage({...messages.totalsByDayRange})}
        periodType={WEEKLY}
      />
      <div className="weekly-stats-body">
        <div className="ceiling">
          <div className="label">
            <FormattedMessage { ...messages.ceiling } />
          </div>
          {
            !isInputVisible ?
              <div
                className={`${dashboardID ? 'on' : 'off'} ceiling-input value`}
                onClick={() => dashboardID && setIsInputVisible(true)}
              >
                {/* eslint-disable react/style-prop-object */}
                <FormattedNumber
                  value={initialCeiling}
                  style="currency"
                  currency={user.baseCurrency}
                />
              </div>
              :
              <Formik
                initialValues={{ initialCeiling }}
                onSubmit={onSubmit}
              >
                {({ errors }) => (
                  <Form
                    onBlur={() => setIsInputVisible(false)}
                  >
                    <Field
                      type="text"
                      name="initialCeiling"
                      placeholder="initialCeiling"
                      onKeyDown={e => {e.keyCode === 27 && setIsInputVisible(false)}}
                      innerRef={(el) => getField(el)}
                    />
                  </Form>
                )}
              </Formik>
          }
        </div>
        <div className="week-slices-container">
        {
          weeklyStats?.length > 0 ?
            weeklyStats.map((weekSliceValue, i) => {
              const ceilingDiff = weekSliceValue - initialCeiling;
              return (
                <div
                  key={uuidv1()}
                  className={`week-slice ${isCurrentWeek(weeklySlices[i], dateRange) ? 'current-week' : ''}`}
                >
                  {isCurrentWeek(weeklySlices[i], dateRange)}
                  <span className="days-slice">
                    {weeklySlices[i]} :
                  </span>
                  <div className="amount">
                    <FormattedNumber
                      value={weekSliceValue}
                      style="currency"
                      currency={user.baseCurrency}
                    />
                  </div>
                  <div className="arrow">
                    {
                      ceilingDiff > 0 ?
                        <FontAwesomeIcon
                          icon={faLongArrowAltUp}
                          className={`${ceilingDiff > CEILING_WARN_LIMIT && 'excess'} arrow up`}
                        />
                        :
                        <FontAwesomeIcon
                          icon={faLongArrowAltDown}
                          className="arrow down"
                        />
                    }
                  </div>
                  {
                    ceilingDiff > 0 ?
                      <div className={`${ceilingDiff > CEILING_WARN_LIMIT && 'excess'} exceeding-amount`}>
                        +
                        <FormattedNumber
                          value={ceilingDiff}
                          style="currency"
                          currency={user.baseCurrency}
                        />
                      </div>
                      :
                      <div className="remaining-amount">
                        <FormattedNumber
                          value={Math.abs(ceilingDiff)}
                          style="currency"
                          currency={user.baseCurrency}
                        />
                      </div>
                  }
                </div>
              )
            })
          :
          <div className="spinner">
            <Spinner width="60px" height="60px" />
          </div>
        }
        </div>
        <div className="average-weekly-amount">
          <FormattedMessage {...messages.averageWeeklyStatsAmount} /> :
          <span className="average-value">
            <FormattedNumber
              value={averageWeeklyStatsAmount}
              style="currency"
              currency={user.baseCurrency}
              maximumFractionDigits={0}
            />
          </span>
        </div>
      </div>
    </StyledWeeklyStats>
  )
}

export default WeeklyStats;
