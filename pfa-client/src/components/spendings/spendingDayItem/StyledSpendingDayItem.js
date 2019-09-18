import styled from 'styled-components/macro';
import colors from '../../../colors';

const StyledSpendingDayItem = styled.div`
  width: 210px;
  height: 300px;
  background: ${colors.grey0};
  border: 1px solid ${colors.grey2};
  float: left;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  
  .date {
    text-align: center;
    font-weight: 800;
    color: #0a313f;
    border: 1px solid ${colors.grey2};
    background-color: ${colors.grey1};
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 5px;
  }
  
  .total {
    text-align: center;
    margin-bottom: 10px;
    
    .total-label {
      margin-right: 5px;
    }
  }
  
  .spending {
    margin: 5px 10px;
    .label {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

export default StyledSpendingDayItem;
