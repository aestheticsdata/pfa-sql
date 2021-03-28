import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import {
  FormattedMessage,
  FormattedNumber,
} from 'react-intl';

import {
  Formik,
  Form,
  Field,
} from 'formik';

import StyledMonthlyBudget from './StyledMonthlyBudget';
import messages from '@components/spendings/messages';

import localesDates from '@src/i18n/locales-dates';

import {
  getInitialAmount as getInitialAmountAction,
  setInitialAmount as setInitialAmountAction,
} from '../actions';

import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import Cookie from 'js-cookie';



const MonthlyBudget = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(state => state.loginReducer.user);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);
  const initialAmount = useSelector(state => state.dashboardReducer.initialAmount);
  const remaining = useSelector(state => state.dashboardReducer.remaining);
  const totalSpendingsOfMonth = useSelector(state => state.dashboardReducer.totalSpendingsOfMonth);

  const onSubmit = (values, { setSubmitting }) => {
    const formattedMonth = {
      start: format(startOfMonth(dateRange.from), 'yyyy-MM-dd'),
      end: format(endOfMonth(dateRange.to), 'yyyy-MM-dd'),
    };
    dispatch(setInitialAmountAction(user.id, values.initialAmount, formattedMonth));
    setIsInputVisible(false);
    setSubmitting(false);
  };

  const getField = (el) => {
    if (isInputVisible && el) {
      el.focus();
    }
  };

  const getInitialAmount = () => {
    const start = startOfMonth(dateRange.from);
    dispatch(getInitialAmountAction(start, dateRange.from, dateRange.to))
  };

  useEffect(() => {
    if (user.id && dateRange.from) {
      // needed when coming from login but causes a 404 with componentDidUpadte. Is it still relevant with useEffect ?
      getInitialAmount();
    }
  }, []);

  useEffect(() => {
    getInitialAmount();
  }, [dateRange]);

  return (
    <StyledMonthlyBudget>
      <div className="date">
        <div className="month">{localesDates[Cookie.get('lang')].MONTHS[getMonth(dateRange.to)]}</div>
        <div className="year">{getYear(dateRange.to)}</div>
      </div>
      <div className="initial-amount">
        <div className="label">
          <FormattedMessage { ...messages.initialAmount } /> :
        </div>
        {
          !isInputVisible ?
            <div
              className="amount-input value"
              onClick={() => setIsInputVisible(true)}
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
              onSubmit={onSubmit}
            >
              {({ isSubmitting, errors }) => (
                <Form
                  onBlur={() => setIsInputVisible(false)}
                >
                  <Field
                    type="text"
                    name="initialAmount"
                    placeholder="initialAmount"
                    innerRef={(el) => getField(el)}
                  />
                </Form>
              )}
            </Formik>
        }
      </div>

      <div className={`remaining-budget ${remaining < 0 && 'warning'}`}>
        <div className="label">
          <FormattedMessage { ...messages.remaining } />
        </div>
        <div className={`value ${remaining < 0 && 'warning'}`}>
          <FormattedNumber
            value={remaining}
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
            value={totalSpendingsOfMonth}
            style="currency"
            currency={user.baseCurrency}
          />
        </div>
      </div>

    </StyledMonthlyBudget>
  )
}

export default MonthlyBudget;

