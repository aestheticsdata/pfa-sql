import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import fr from 'date-fns/locale/fr';
import en from 'date-fns/locale/en-US';
import Cookie from 'js-cookie';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';


const getWeekDays = (weekStart) => {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(addDays(weekStart, i));
  }
  return days;
};

const getWeekRange = (date) => {
  return {
    from: startOfWeek(date),
    to: endOfWeek(date),
  };
};


class DatePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: false,
      hoverRange: null,
      selectedDays: [],
      lang: Cookie.get('lang'),
    };
  }

  componentDidMount() {
    this.handleDayChange(new Date());
  }

  toggleCalendar = () => {
    this.setState({
      isCalendarVisible:! this.state.isCalendarVisible,
    })
  };

  // ////////////////////////////////////////////////
  // needed for the HOC react-onclickoutside ////////
  handleClickOutside = ev => {
    this.setState({
      isCalendarVisible: false,
    })
  };
  // ////////////////////////////////////////////////

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };

  locales = {
    'fr': {
      fr,
      formatString: 'dd MMM yyyy',
    },
    'en': {
      en,
      formatString: 'MMM do y',
    },
  };

  getFormattedDate = (date) => {
    return format(date, this.locales[this.state.lang].formatString,  { locale: this.locales[this.state.lang][this.state.lang] })
  };

  render() {
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <StyledDatePickerWrapper>
        <div
          className="caption"
          onClick={this.toggleCalendar}
        >
          {
            selectedDays.length === 7 ?
              <div>
                {this.getFormattedDate(selectedDays[0])} –{' '}
                {this.getFormattedDate(selectedDays[6])}
              </div>
              :
              <div>dates</div>
          }
        </div>
        <div className="date-picker">
          {
            this.state.isCalendarVisible ?
              <DayPicker
                selectedDays={selectedDays}
                showWeekNumbers
                showOutsideDays
                modifiers={modifiers}
                onDayClick={this.handleDayChange}
                onDayMouseEnter={this.handleDayEnter}
                onDayMouseLeave={this.handleDayLeave}
                onWeekClick={this.handleWeekClick}
              />
              :
              null
          }
        </div>
      </StyledDatePickerWrapper>
    )
  }
}

export default onClickOutside(DatePickerWrapper);

