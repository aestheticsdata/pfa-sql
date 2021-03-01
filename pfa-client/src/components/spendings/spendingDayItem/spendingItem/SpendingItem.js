import { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import StyledSpendingItem from './StyledSpendingItem';

import messages from '../../messages';


const SpendingItem = ({
  spending,
  editCallback,
  deleteCallback,
  toggleAddSpending,
}) => {
  const [hover, setHover] = useState(false);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  const onMouseOver = () => { setHover(true) };

  const onMouseLeave = () => { setHover(false) };

  const openEditModal = () => editCallback(spending);

  const hideConfirm = () => {
    toggleAddSpending();
    setIsDeleteConfirmVisible(false);
  };

  const confirmDeletePopin = (spending, deleteCallback) => {
    return (
      <div className="confirm-delete-popin">
        <span className="title">
          <FormattedMessage { ...messages.confirmDeleteTitle} />
        </span>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => hideConfirm()}
          >
            <FormattedMessage { ...messages.confirmDeleteCancelButton } />
          </button>
          <button
            className="confirm-button"
            onClick={
              () => {
                hideConfirm();
                deleteCallback(spending._id, spending.itemType);
              }
            }>
            <FormattedMessage { ...messages.confirmDeleteConfirmButton} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <StyledSpendingItem>
      <div
        className="spending-item-container"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {
          !isDeleteConfirmVisible ?
            <div className="spending">
              <span className="label" title={spending.label}>{spending.label}</span>
              {
                spending && spending.category ?
                  <span className="category">{spending.category}</span>
                  :
                  null
              }
              {
                hover ?
                  <>
                      <span
                        className="edit action"
                        onClick={() => openEditModal()}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </span>
                    <span
                      className="delete action"
                      onClick={
                        () => {
                          toggleAddSpending();
                          setIsDeleteConfirmVisible(true);
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
                  {/* eslint-disable  react/style-prop-object */}
                <FormattedNumber
                  value={spending.amount}
                  style="currency"
                  currency={spending.currency}
                />
                </span>
            </div>
            :
            confirmDeletePopin(spending, deleteCallback)
        }
      </div>
    </StyledSpendingItem>
  )
}

export default SpendingItem;
