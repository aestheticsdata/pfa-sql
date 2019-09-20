import React, { Component } from 'react';
import {FormattedNumber} from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

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
          className="spending-item-container"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <div className="spending">
            <span className="label" title={spending.label}>{spending.label}</span>
            {
              this.state.hover ?
                <>
                  <span className="edit action">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </span>
                  <span className="delete action">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </>
                :
                null
            }
            <span className="amount">
              <FormattedNumber
                value={spending.amount}
                style="currency"
                currency={spending.currency}
              />
            </span>
          </div>
        </div>
      </StyledSpendingItem>
    )
  }
}

export default SpendingItem;
