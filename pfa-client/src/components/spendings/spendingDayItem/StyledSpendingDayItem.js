import styled from 'styled-components/macro';
import colors from '../../../colors';

const StyledSpendingDayItem = styled.div`
  width: 320px;
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
      width: 270px;
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
    }
  
  }
  
  .total {
    text-align: center;
    margin: 10px 0;
    border-bottom: 1px solid ${colors.grey2};
    padding-bottom: 10px;
    
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

    .spending {
      position: relative;
      margin: 0 10px;
      width: 94%;
      height: 18px;
      padding: 14px 0;
      
      &:hover {
        background-color: #a5ecff;
      }
      
      .label {
        position: absolute;
        top: 5px;
        width: 150px;
        height: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      
      .amount {
        position: absolute;
        top: 5px;
        right: 0;
      }
    }
  }
`;

export default StyledSpendingDayItem;
