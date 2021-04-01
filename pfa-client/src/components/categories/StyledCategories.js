import styled from 'styled-components/macro';
import colors from '@src/colors';
import StyledDeleteConfirm from "@components/common/StyledDeleteConfirm";

const StyledCategories = styled.div`
  .category-container {
    position: relative;
    width: 300px;
    background-color: ${colors.grey0};
    margin: 10px;
    height: 33px;
    border-radius: 4px;

      .edit-category-popin {
        position: relative;
        top: 3px;
        left: 7px;
        .edit-category-popin-name {
          margin-right: 2px;
        }
        .edit-category-popin-color {
          cursor: pointer;
          margin-right: 2px;
        }
        .cancel-button {
          cursor: pointer;
          margin: 0 2px;
        }
        .confirm-button {
          cursor: pointer;
          margin: 0 2px;
        }
      }

    .category-sub-container {
        position: relative;
        top: 2px;
        left: 3px;
        width: 98%;
        height: 86%;
        padding: 2px;

      .category {
        display: inline-block;
        margin: 3px 0 3px 12px;
        width: 104px;
        height: 18px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3;
        border: 1px solid ${colors.categoryBorder};
      }

      .actions {
        display: none;
      }

      &:hover {
        transition: background-color 50ms linear;
        background-color: ${colors.spendingItemHover};

        .actions {
          display: inline-block;

          .action {
            position: relative;
            top: 2px;
            cursor: pointer;
            color: ${colors.grey1};
            transition: color 150ms linear;

            &:hover {
              color: ${colors.spendingActionHover};
            }
            &.edit {
              left: 120px;
            }
            &.delete {
              left: 130px;
            }
          }
        }
      }
    }
    
    
    ${StyledDeleteConfirm}
  } 
`;

export default StyledCategories;
