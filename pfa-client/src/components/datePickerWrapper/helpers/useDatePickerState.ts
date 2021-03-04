import { useState } from "react";
import {
  Days,
  HoverRange
} from "@components/datePickerWrapper/types";

const useDatePickerState = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [hoverRange, setHoverRange] = useState<HoverRange>(null);
  const [selectedDays, setSelectedDays] = useState<Days>([]);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleClickOutside = () => {
    setIsCalendarVisible(false);
  }

  return {
    isCalendarVisible,
    hoverRange,
    selectedDays,
    setHoverRange,
    setSelectedDays,
    toggleCalendar,
    handleClickOutside,
  }
}

export default useDatePickerState;
