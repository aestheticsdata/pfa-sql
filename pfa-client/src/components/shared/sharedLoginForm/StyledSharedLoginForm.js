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
    
    .password-container {
      position: relative;
  
      .show-password {
        position: absolute;
        display: inline-block;
        top: 10px;
        right: 12px;
        cursor: pointer;
      }
    }
    
    select {
      margin: 16px 0 8px 0;
      border-radius: 0;
      border-bottom: 1px solid ${colors.formsGlobalColor};
      border-top: 0;
      border-left: 0;
      border-right: 0;
      outline: none;
      color: inherit;
      background: transparent;
      padding-bottom: 10px;
      width: 100%;
      -webkit-appearance: none;
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

