import styled from 'styled-components/macro';
import colors from '@src/colors';
import {
  buttonMixin,
  inputMixin,
} from '@components/shared/sharedCSS/sharedFormsCSS';

import {
  containerWidth,
  containerWidthdashboard,
  containerHeight,
  containerHeightdashboard,
} from '../StyledSpendingDayItem';

const StyledSpendingModal = styled.div`
  position: absolute;
  top: 33px;
  right: 0;
  background-color: ${colors.spendingItemHover};
  border: 1px solid ${colors.spendingActionHover};
  border-radius: 5px;
  color: ${colors.blueNavy};
  width: ${props => props.recurringType ? (containerWidthdashboard-22) + 'px' : (containerWidth-22) + 'px'};
  height: ${props => props.recurringType ? (containerHeightdashboard-53)+'px' : (containerHeight-53)+'px'};
  padding: 0 10px;
  
  input {
    ${inputMixin};
  }
  
  .spending-btn {
    ${buttonMixin};
    
    display: block;
    margin: 10px auto;
    width: 50%;
    height: 20px;
  }
`;

export default StyledSpendingModal;
