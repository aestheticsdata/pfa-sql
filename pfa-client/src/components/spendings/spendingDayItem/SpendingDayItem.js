import React, { Component } from 'react';

import StyledSpendingDayItem from './StyledSpendingDayItem';


class SpendingDayItem extends Component {
  render() {
    const { spending } = this.props;
    return (
      <StyledSpendingDayItem>
        <div>
          <div>date : date</div>
          {
            spending ?
              <>
                <div>Total : </div>
                <span>{spending.label}</span>
                <span>{spending.amount}</span>
              </>
              :
              null
          }
        </div>
      </StyledSpendingDayItem>
    )
  }
}

export default SpendingDayItem;
