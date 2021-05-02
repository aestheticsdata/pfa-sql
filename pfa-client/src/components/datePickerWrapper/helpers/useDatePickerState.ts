import { useState } from "react";
import {
  Days,
  HoverRange
} from "@components/datePickerWrapper/types";
import formatISO from "date-fns/formatISO";
import { history } from "@src/history";
import { getWeekDays, getWeekRange } from "@components/datePickerWrapper/helpers";
import { dateRangeChange } from "@components/datePickerWrapper/actions";
import { useDispatch } from "react-redux";

const useDatePickerState = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [hoverRange, setHoverRange] = useState<HoverRange>(null);
  const [selectedDays, setSelectedDays] = useState<Days>([]);

  const dispatch = useDispatch();

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleClickOutside = () => {
    setIsCalendarVisible(false);
  }

  const handleDayChange = (date: Date) => {
    const dateISO = formatISO(date, { representation: 'date' });

    history.push('?currentDate=' + dateISO);

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

  const handleDayEnter = (date: Date) => {
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    setHoverRange(null);
  };

  return {
    isCalendarVisible,
    hoverRange,
    selectedDays,
    setHoverRange,
    setSelectedDays,
    toggleCalendar,
    handleClickOutside,
    handleDayChange,
    handleDayEnter,
    handleDayLeave,
  }
}

export default useDatePickerState;
