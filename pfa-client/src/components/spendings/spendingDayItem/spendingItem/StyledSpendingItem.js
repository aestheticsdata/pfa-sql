import styled from 'styled-components';
import colors from '../../../../colors';

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
      
      
      .label {
        position: absolute;
        width: 150px;
        height: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
    
}`;

export default StyledSpendingItem;




