import React, { Component } from 'react';

import SpendingDayItem from '../spendingDayItem/SpendingDayItem';
import StyledSpendingDashboard from './StyledSpendingDashboard';

class SpendingDashboard extends Component {
  render() {
    return (
      <StyledSpendingDashboard>
        <div>Total de la semaine : {this.props.weekTotal}</div>
        <div className="recurring-spendings-container">
          <SpendingDayItem
            spendingsByDay={this.props.recurring}
            total={0}
            date={22}
            isLoading={false}
            user={this.props.user}
            deleteSpending={(recurringID) => this.props.deleteRecurring(recurringID)}
          />
        </div>
      </StyledSpendingDashboard>
    )
  }
}

export default SpendingDashboard;
