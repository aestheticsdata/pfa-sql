import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';


class DatePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: false,
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

  render() {
    return (
      <StyledDatePickerWrapper>
        <div
          className="caption"
          onClick={this.toggleCalendar}
        >
          dates
        </div>
        <div className="date-picker">
          {
            this.state.isCalendarVisible ?
              <DayPicker />
              :
              null
          }
        </div>
      </StyledDatePickerWrapper>
    )
  }
}

export default onClickOutside(DatePickerWrapper);

