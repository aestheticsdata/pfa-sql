import React, { Component } from 'react';

import StyledSpendingDayItem from './StyledSpendingDayItem';


class SpendingDayItem extends Component {
  render() {
    const { spendingsByDay } = this.props;
    return (
      <StyledSpendingDayItem>
        <div>
          <div>date : date</div>
          <div>Total : </div>
          {
            spendingsByDay ?
              spendingsByDay.map(spending => {
                return (
                  <div key={spending._id}>
                    <span>{spending.label}</span>
                    <span>{spending.amount}</span>
                  </div>
                )
              })
              :
              null
          }
        </div>
      </StyledSpendingDayItem>
    )
  }
}

export default SpendingDayItem;
