import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import moment from 'moment';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';


function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

class DatePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: false,
      hoverRange: null,
      selectedDays: [],
    };
  }

  toggleCalendar = () => {
    this.setState({
      isCalendarVisible:! this.state.isCalendarVisible,
    })
  };

  handleClickOutside = ev => {
    this.setState({
      isCalendarVisible: false,
    })
  };

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
                {moment(selectedDays[0]).format('LL')} –{' '}
                {moment(selectedDays[6]).format('LL')}
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

