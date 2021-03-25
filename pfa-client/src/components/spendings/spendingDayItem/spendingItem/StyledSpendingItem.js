import styled from 'styled-components';
import colors from '../../../../colors';

const labelWidth = 170;

const StyledSpendingItem = styled.div`
  .spending-item-container {
    position: relative;
    margin: 0 10px;
    width: 94%;
    height: 18px;
    padding: 14px 0;
    background-color: ${colors.grey0};
    transition: background-color 150ms linear;

    &:hover {
      background-color: ${colors.spendingItemHover};
    }

    .spending {
      position: absolute;
      width: 100%;
      left: 0;
      top: 5px;
      user-select: none;


      .label {
        position: absolute;
        width: ${labelWidth}px;
        height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .category {
        position: absolute;
        width: 104px;
        height: 18px;
        left: ${labelWidth + 5}px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3;
        border: 1px solid ${colors.categoryBorder};
      }

      .amount {
        position: absolute;
        right: 0;
      }

      .action {
        position: absolute;
        cursor: pointer;
        color: ${colors.grey1};
        transition: color 150ms linear;

        &:hover {
          color: ${colors.spendingActionHover};
        }

        &.edit {
          right: 98px;
        }

        &.delete {
          right: 78px;
        }
      }

    }

    .confirm-delete-popin {
      position: absolute;
      width: 100%;
      padding: 4px 0 4px 6px;
      border: 1px solid ${colors.warningDelete};
      border-radius: 3px;
      background-color: ${colors.warningDeleteBackground};
      top: 0;
      right: 0;
      color: ${colors.warningDelete};

      .title {
        display: inline-block;
        text-align: center;
        width: 56%;
        font-size: 14px;
        user-select: none;
      }

      .button-container {
        float: right;
        padding-left: 2px;

        .cancel-button {
          cursor: pointer;
        }

        .confirm-button {
          cursor: pointer;
        }
      }
    }

  }`;

export default StyledSpendingItem;




