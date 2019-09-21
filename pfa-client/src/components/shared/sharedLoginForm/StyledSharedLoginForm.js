import styled from 'styled-components';
import colors from '../../../colors';
import {
  buttonMixin,
  inputMixin,
} from '../sharedCSS/sharedFormsCSS';

const StyledSharedLoginForm = styled.div`
  .container {
    color: ${colors.formsGlobalColor};
    
    .title {
      padding: 10px 0 30px 0;
      font-size: 30px;
      text-align: center;
      font-weight: 100;
    }
    
    input {
      ${inputMixin};
    }
    
    .shared-login-submit-btn {
      ${buttonMixin};
      
      margin: 40px 0 20px 0;
      font-size: 18px;
      width: 100%;
      height: 30px;
      
    }
  }
`;

export default StyledSharedLoginForm;

