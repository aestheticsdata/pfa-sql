import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import { connect } from 'react-redux';

import format from 'date-fns/format';

import fr from 'date-fns/locale/fr';
import en from 'date-fns/locale/en-US';

import Cookie from 'js-cookie';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import localesDates from '../../i18n/locales-dates';

import { dateRangeChange } from './actions';

import StyledDatePickerWrapper from './StyledDatePickerWrapper';

import { getWeekDays, getWeekRange } from './helpers';


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
    const weekRange = getWeekRange(date);
    const dateRange = getWeekDays(weekRange.from, date);

    this.props.dateRangeChange({
      from: weekRange.from,
      to: weekRange.to,
      range: dateRange,
    });

    this.setState({
      selectedDays: dateRange,
    });

    this.handleClickOutside();
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
    // this.setState({
    //   selectedDays: days,
    // });
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
    const { lang } = this.state;
    return format(date, this.locales[lang].formatString, { locale: this.locales[lang][lang] });
  };

  render() {
    const { hoverRange, selectedDays, lang } = this.state;

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

    return (
      <StyledDatePickerWrapper>
        <div
          className="caption"
          onClick={this.toggleCalendar}
        >
          {
            selectedDays.length > 0 ?
              <div>
                {this.getFormattedDate(selectedDays[0])} –{' '}
                {this.getFormattedDate(selectedDays[selectedDays.length - 1])}
              </div>
              :
              <div>dates</div>
          }
        </div>
        <div className="date-picker">
          {
            this.state.isCalendarVisible ?
              <DayPicker
                initialMonth={selectedDays[0]}
                months={localesDates[lang].MONTHS}
                weekdaysLong={localesDates[lang].WEEKDAYS_LONG}
                weekdaysShort={localesDates[lang].WEEKDAYS_SHORT}
                selectedDays={selectedDays}
                showWeekNumbers={false}
                showOutsideDays={false}
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

const mapStateToProps = (state) => {
  return {
    dateRangeReducer: state.dateRangeReducer.dateRange,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dateRangeChange: (dateRange) => dispatch(dateRangeChange(dateRange)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(DatePickerWrapper));

