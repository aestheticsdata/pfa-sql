import styled from 'styled-components';
import colors from '../../../colors';

const StyledSharedLoginForm = styled.div`
  .container {
    color: ${colors.formsGlobalColor};
    
    .title {
      padding: 10px 0 20px 0;
      font-size: 30px;
      text-align: center;
      font-weight: 100;
    }
    
    input {
      // hack to remove in Chrome, input colors
      // https://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs
      // https://stackoverflow.com/questions/34551637/css-webkit-transition-not-working-on-input-type
      // https://github.com/styled-components/styled-components/issues/492
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-transition-delay: 9999s;
      }
      // ////////////////////////////////////////
      color: inherit;
      font-size: 15px;
      background-color: transparent;
      border-bottom: 1px solid ${colors.formsGlobalColor};
      margin: 8px 0;
      outline: none;
      width: 100%;
      padding-bottom: 10px;
      &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.formsGlobalColor};
        transition: all .2s ease;
      }
    }
    
    .shared-login-submit-btn {
      color: inherit;
      text-transform: uppercase;
      margin: 45px 0 20px 0;
      font-size: 18px;
      background: transparent;
      border: 1px solid ${colors.formsGlobalColor};
      width: 100%;
      height: 30px;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0 1px 10px 1px rgba(150, 150, 150, 0.6);
        background-color: rgba(200, 200, 200, 0.1);
        color: ${colors.formsGlobalColorHover};
        border: 1px solid ${colors.formsGlobalColorHover};
        transition: all .2s ease;
      }
    }
  }
`;

export default StyledSharedLoginForm;

