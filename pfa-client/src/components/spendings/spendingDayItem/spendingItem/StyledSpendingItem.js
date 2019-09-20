import styled from 'styled-components';

const StyledSpendingItem = styled.div`
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
`;

export default StyledSpendingItem;




