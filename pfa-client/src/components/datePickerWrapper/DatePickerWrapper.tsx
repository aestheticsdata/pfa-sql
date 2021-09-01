import {
  useEffect,
  useState,
  useRef,
} from 'react';

import queryString from 'query-string';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import localesDates from '@src/i18n/locales-dates';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';

import {
  getFormattedDate,
} from './helpers';

import { getLang } from "@helpers/lang";
import { LangKeys } from "@helpers/types";

import useOnClickOutside from 'use-onclickoutside';

import useDatePickerState from "@components/datePickerWrapper/helpers/useDatePickerState";



const DatePickerWrapper = () => {
  const {
    isCalendarVisible,
    hoverRange,
    selectedDays,
    toggleCalendar,
    handleClickOutside,
    handleDayChange,
    handleDayEnter,
    handleDayLeave,
  } = useDatePickerState();

  const [lang] = useState<LangKeys>(getLang());

  const ref = useRef(null);

  const daysAreSelected = selectedDays.length > 0;

  const modifiers: any = {
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

  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    const currentDate = queryString.parse(window.location.search).currentDate;
    currentDate ? handleDayChange(new Date(currentDate as string)) : handleDayChange(new Date());
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
              onWeekClick={() => {}}
            />
            :
            null
        }
      </div>
    </StyledDatePickerWrapper>
  )
}

export default DatePickerWrapper;
