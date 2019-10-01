import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  injectIntl,
} from 'react-intl';

import {
  Formik,
  Form,
  Field,
} from 'formik';

import StyledMonthlyBudget from './StyledMonthlyBudget';
import messages from '../../messages';

import localesDates from '../../../../i18n/locales-dates';

import {
  getInitialAmount,
  setInitialAmount,
} from '../actions';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import Cookie from 'js-cookie';


class MonthlyBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputVisible: false,
    };
  }

  componentDidMount() {
    if (this.props.user.id && this.props.dateRange.from) {
      // needed when coming from login but causes a 404 with componentDidUpadte
      this.getInitialAmount();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.dateRange !== prevProps.dateRange) {
      this.getInitialAmount();
    }
  }

  onSubmit = (values, { setSubmitting }) => {
    const formattedMonth = {
      start: format(startOfMonth(this.props.dateRange.from), 'yyyy-MM-dd'),
      end: format(endOfMonth(this.props.dateRange.to), 'yyyy-MM-dd'),
    };
    this.props.setInitialAmount(this.props.user.id, values.initialAmount, formattedMonth);
    this.setState({ isInputVisible: false });
    setSubmitting(false);
  };

  getField = (el) => {
    if (this.state.isInputVisible && el) {
      el.focus();
    }
  };

  getInitialAmount = () => {
    const start = startOfMonth(this.props.dateRange.from);
    this.props.getInitialAmount(start, this.props.dateRange.from, this.props.dateRange.to);
  };

  render() {
    const {
      initialAmount,
      user,
    } = this.props;

    return (
      <StyledMonthlyBudget>
        <div className="date">
          <div className="month">{localesDates[Cookie.get('lang')].MONTHS[getMonth(this.props.dateRange.to)]}</div>
          <div className="year">{getYear(this.props.dateRange.to)}</div>
        </div>
        <div className="initial-amount">
          <div className="label">
            <FormattedMessage { ...messages.initialAmount } /> :
          </div>
          {
            !this.state.isInputVisible ?
              <div
                className="amount-input value"
                onClick={() => this.setState({ isInputVisible: true })}
              >
                {/* eslint-disable react/style-prop-object */}
                <FormattedNumber
                  value={initialAmount}
                  style="currency"
                  currency={user.baseCurrency}
                />
              </div>
              :
              <Formik
                initialValues={{ initialAmount }}
                onSubmit={this.onSubmit}
              >
                {({ isSubmitting, errors }) => (
                  <Form
                    onBlur={() => this.setState({ isInputVisible: false })}
                  >
                    <Field
                      type="text"
                      name="initialAmount"
                      placeholder="initialAmount"
                      innerRef={(el) => this.getField(el)}
                    />
                  </Form>
                )}
              </Formik>
          }
        </div>

        <div className="remaining-budget">
          <div className="label">
            <FormattedMessage { ...messages.remaining } />
          </div>
          <div className="value">
            <FormattedNumber
              value={this.props.remaining}
              style="currency"
              currency={user.baseCurrency}
            />
          </div>
        </div>

        <div className="month-total">
          <div className="label">
            <FormattedMessage { ...messages.totalSpendingsOfMonth } />
          </div>
          <div className="value">
            <FormattedNumber
              value={this.props.totalSpendingsOfMonth}
              style="currency"
              currency={user.baseCurrency}
            />
          </div>
        </div>

      </StyledMonthlyBudget>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    dateRange: state.dateRangeReducer.dateRange,
    initialAmount: state.dashboardReducer.initialAmount,
    remaining: state.dashboardReducer.remaining,
    totalSpendingsOfMonth: state.dashboardReducer.totalSpendingsOfMonth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialAmount: (start, from, to) => dispatch(getInitialAmount(start, from, to)),
    setInitialAmount: (userID, amount, month) => dispatch(setInitialAmount(userID, amount, month)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyBudget);
