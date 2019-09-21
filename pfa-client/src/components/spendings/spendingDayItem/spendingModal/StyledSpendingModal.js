import styled from 'styled-components/macro';
import colors from '../../../../colors';
import {
  buttonMixin,
  inputMixin,
} from '../../../shared/sharedCSS/sharedFormsCSS';

const StyledSpendingModal = styled.div`
  background-color: ${colors.spendingItemHover};
  border: 1px solid ${colors.spendingActionHover};
  color: ${colors.blueNavy};
  border-radius: 5px;
  position: absolute;
  width: 298px;
  height: 247px;
  top: 33px;
  right: 0;
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
