import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
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

import {
  getInitialAmount,
  setInitialAmount,
} from '../actions';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';


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
    this.props.getInitialAmount(start);
  };

  render() {
    const {
      initialAmount,
    } = this.props;

    return (
      <StyledMonthlyBudget>
        <div className="initialAmount">
          {
            !this.state.isInputVisible ?
              <div onClick={() => this.setState({ isInputVisible: true })}>
                <span>{initialAmount}</span>
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
          <span>Restant</span>
        </div>
        <div className="savings">
          <span>Economisé</span>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialAmount: (start) => dispatch(getInitialAmount(start)),
    setInitialAmount: (userID, amount, month) => dispatch(setInitialAmount(userID, amount, month)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyBudget);
