import React, { Component } from 'react';
import {FormattedNumber} from 'react-intl';

import StyledSpendingItem from './StyledSpendingItem';

class SpendingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onMouseOver = () => {
    this.setState({hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { spending } = this.props;
    return (
      <StyledSpendingItem>
        <div
          className="spending"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <span className="label" title={spending.label}>{spending.label}</span>
          <span className="amount">
            <FormattedNumber
              value={spending.amount}
              style="currency"
              currency={spending.currency}
            />
          </span>
        </div>
      </StyledSpendingItem>
    )
  }
}

export default SpendingItem;
