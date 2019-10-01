import styled, { css } from 'styled-components/macro';
import colors from '../../../../colors';
import { inputMixin } from '../../../shared/sharedCSS/sharedFormsCSS';

const label = css`
  .label {
    margin-bottom: 10px;
  }
`;

const value = css`
  .value {
    font-weight: 800;
  }
`;

const StyledMonthlyBudget = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${colors.grey0};
  border: 1px solid #fff;
  border-radius: 3px;
  text-align: center;
  font-size: 17px;
  
  .initial-amount {
    cursor: default;
    margin-top: 20px;
    ${label};
    ${value};
    
    .amount-input {
      cursor: pointer;
      color: ${colors.initialAmount};
      width: 100px;
      margin: 0 auto;
      padding: 10px;
      
      &:hover {
        background-color: yellow;
      }
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
      color: ${colors.initialAmount};
      font-size: 17px;
      font-weight: 800;
      width: 100px;
      text-align: center;
      background-color: transparent;
      border-bottom: 1px solid ${colors.formsGlobalColor};
      outline: none;
      margin-bottom: 11px;
      &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.formsGlobalColor};
        transition: all .2s ease;
      }
    }
  }
  
  .remaining-budget {
    margin: 20px 0;
    ${label};
    ${value};
  }
  
  .savings {
    margin: 25px 0;
    ${label};
    ${value};
  }
`;

export default StyledMonthlyBudget;
