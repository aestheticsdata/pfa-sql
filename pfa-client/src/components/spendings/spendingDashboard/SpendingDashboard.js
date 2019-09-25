import React, { Component } from 'react';

import StyledSpendingDashboard from './StyledSpendingDashboard';

class SpendingDashboard extends Component {
  render() {
    return (
      <StyledSpendingDashboard>
        <div>Total de la semaine : {this.props.weekTotal}</div>
      </StyledSpendingDashboard>
    )
  }
}

export default SpendingDashboard;
