import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
import { useDispatch } from 'react-redux';

import Cookie from 'js-cookie';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import localesDates from '../../i18n/locales-dates';

import { dateRangeChange } from './actions';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';

import {
  getFormattedDate,
  getWeekDays,
  getWeekRange
} from './helpers';

import useOnClickOutside from 'use-onclickoutside';


const DatePickerWrapper = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [hoverRange, setHoverRange] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [lang] = useState(Cookie.get('lang'));

  const ref = useRef();

  const daysAreSelected = selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[selectedDays.length - 1],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[selectedDays.length - 1],
  };

  const dispatch = useDispatch();

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleClickOutside = () => {
    setIsCalendarVisible(false);
  }
  useOnClickOutside(ref, handleClickOutside);

  const handleDayChange = date => {
    const weekRange = getWeekRange(date);
    const dateRange = getWeekDays(weekRange.from, date);


    dispatch(
      dateRangeChange(
        {
          from: weekRange.from,
          to: weekRange.to,
          range: dateRange,
        }
      )
    );

    setSelectedDays(dateRange);

    handleClickOutside();
  };

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    // setHoverRange(getWeekRange(null));
    setHoverRange(getWeekRange(undefined));
  };

  const handleWeekClick = (weekNumber, days, e) => {
    // this.setState({
    //   selectedDays: days,
    // });
  };

  useEffect(() => {
    handleDayChange(new Date());
  }, []);

  return (
    <StyledDatePickerWrapper ref={ref}>
      <div
        className="caption"
        onClick={toggleCalendar}
      >
        {
          selectedDays.length > 0 ?
            <div>
              {getFormattedDate(selectedDays[0], lang)} –{' '}
              {getFormattedDate(selectedDays[selectedDays.length - 1], lang)}
            </div>
            :
            <div>dates</div>
        }
      </div>
      <div className="date-picker">
        {
          isCalendarVisible ?
            <DayPicker
              initialMonth={selectedDays[0]}
              months={localesDates[lang].MONTHS}
              weekdaysLong={localesDates[lang].WEEKDAYS_LONG}
              weekdaysShort={localesDates[lang].WEEKDAYS_SHORT}
              selectedDays={selectedDays}
              showWeekNumbers={false}
              showOutsideDays={false}
              modifiers={modifiers}
              onDayClick={handleDayChange}
              onDayMouseEnter={handleDayEnter}
              onDayMouseLeave={handleDayLeave}
              onWeekClick={handleWeekClick}
            />
            :
            null
        }
      </div>
    </StyledDatePickerWrapper>
  )
}

export default DatePickerWrapper;
