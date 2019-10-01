import styled, { css } from 'styled-components/macro';
import colors from '../../../../colors';

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
  font-size: 14px;
  text-transform: uppercase;
  
  .date {
    width: 80%;
    font-weight: 800;
    margin: 10px auto;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.grey2};
    font-size: 13px;
  }
  
  .initial-amount {
    cursor: default;
    margin-top: 20px;
    ${value};
    border-left: 10px solid ${colors.initialAmount};
    
    .amount-input {
      cursor: pointer;
      color: ${colors.initialAmount};
      width: 100px;
      margin: 0 auto;
      padding: 10px;
      
      &:hover {
        background-color: ${colors.initialAmountHover};
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
      font-size: 14px;
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
    &.warning {
      color: ${colors.generalWarning};
      background-color: ${colors.generalWarningBackground};
    }
    .value {
      color: ${colors.remainingAmount};
      &.warning {
        color: ${colors.generalWarning};
      }
    }
    border-left: 10px solid ${colors.remainingAmount};
  }
  
  .month-total {
    ${label};
    ${value};
    .value {
      color: ${colors.monthTotalAmount};
    }
    border-left: 10px solid ${colors.monthTotalAmount};
  }
`;

export default StyledMonthlyBudget;
