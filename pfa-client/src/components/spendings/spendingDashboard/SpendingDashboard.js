import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import messages from '../messages';

import SpendingDayItem from '../spendingDayItem/SpendingDayItem';
import StyledSpendingDashboard from './StyledSpendingDashboard';

class SpendingDashboard extends Component {
  render() {
    const {
      recurring,
      user,
      month,
      deleteRecurring,
      weekTotal,
      isLoading
    } = this.props;

    return (
      <StyledSpendingDashboard>
        <div className="current-week-total">
          <FormattedMessage { ...messages.currentWeekTotal } />:
          <span>{weekTotal}</span>
        </div>
        <div className="recurring-spendings-container">
          <SpendingDayItem
            spendingsByDay={recurring}
            total={0}
            isLoading={isLoading}
            user={user}
            deleteSpending={deleteRecurring}
            recurringType
            month={month}
          />
        </div>
      </StyledSpendingDashboard>
    )
  }
}

export default SpendingDashboard;
