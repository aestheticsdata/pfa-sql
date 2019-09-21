import React, { Component } from 'react';
import {FormattedMessage, FormattedNumber} from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import StyledSpendingItem from './StyledSpendingItem';

import messages from '../../messages';


class SpendingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isDeleteConfirmVisible: false,
    };
  }

  onMouseOver = () => {
    this.setState({hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  hideConfirm = () => {
    this.props.toggleAddSpending();
    this.setState({ isDeleteConfirmVisible: false });
  };

  confirmDeletePopin = (spending, deleteCallback) => {
    return (
      <div className="confirm-delete-popin">
                <span className="title">
                  <FormattedMessage { ...messages.confirmDeleteTitle} />
                </span>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => this.hideConfirm()}
          >
            <FormattedMessage { ...messages.confirmDeleteCancelButton } />
          </button>
          <button
            className="confirm-button"
            onClick={
              () => {
                this.hideConfirm();
                deleteCallback(spending._id);
              }
            }>
            <FormattedMessage { ...messages.confirmDeleteConfirmButton} />
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {
      spending,
      editCallback,
      deleteCallback,
      toggleAddSpending,
    } = this.props;
    const { isDeleteConfirmVisible } = this.state;

    return (
      <StyledSpendingItem>
        <div
          className="spending-item-container"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          {
            !isDeleteConfirmVisible ?
              <div className="spending">
                <span className="label" title={spending.label}>{spending.label}</span>
                {
                  this.state.hover ?
                    <>
                      <span
                        className="edit action"
                        onClick={() => editCallback(spending._id)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </span>
                      <span
                        className="delete action"
                        onClick={
                          () => {
                            toggleAddSpending();
                            this.setState({ isDeleteConfirmVisible: true });
                          }
                        }
                      >
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
              :
              this.confirmDeletePopin(spending, deleteCallback)
          }
        </div>
      </StyledSpendingItem>
    )
  }
}

export default SpendingItem;
