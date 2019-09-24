import styled from 'styled-components/macro';
import colors from '../../../colors';

export const containerWidth = 440;

const StyledSpendingDayItem = styled.div`
  width: ${containerWidth}px;
  height: 300px;
  background: ${colors.grey0};
  border: 1px solid ${colors.grey2};
  float: left;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  
  .spending-modal {
    position: relative;
    z-index: 1;
  }
  
  .header {
    width: 100%;
    height: 30px;
    
    .date {
      float: left;
      text-align: center;
      font-weight: 800;
      width: ${containerWidth-50}px;
      color: #0a313f;
      border: 1px solid ${colors.grey2};
      background-color: ${colors.grey1};
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 5px;
    }
    
    .add-spending {
      float: right;
      margin-top: 6px;
      user-select: none;
      cursor: pointer;
      color: ${colors.grey1};
      font-size: 18px;
      
      &:hover {
        color: ${colors.addSpendingHover};
      }
      
      &.disabled {
        cursor: not-allowed;
        &:hover {
          color: ${colors.grey1};
        }
      }
    }
  
  }
  
  .total {
    text-align: center;
    margin: 10px 0;
    border-bottom: 1px solid ${colors.grey2};
    padding-bottom: 10px;
    &.warning {
      color: ${colors.warningNoCurrenciesRates};
    }
    
    .total-label {
      text-transform: uppercase;
      margin-right: 5px;
    }
    
    .total-amount {
      font-weight: 800;
    }
  }
  
  .spendings-list-container {
    overflow: hidden;
    height: 200px;
    overflow-y: auto;
    
    
    .spinner {
      text-align: center;
      padding-top: 60px;
    }
  }
`;

export default StyledSpendingDayItem;
