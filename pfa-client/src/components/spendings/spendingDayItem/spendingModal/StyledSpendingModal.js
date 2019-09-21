import styled from 'styled-components/macro';
import colors from '../../../../colors';

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
    color: ${colors.blueNavy};
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
  
  .spending-btn {
    color: inherit;
    display: block;
    text-transform: uppercase;
    margin: 10px auto;
    background: transparent;
    border: 1px solid ${colors.formsGlobalColor};
    width: 50%;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &:hover:enabled {
      box-shadow: 0 1px 10px 1px rgba(150, 150, 150, 0.6);
      background-color: rgba(200, 200, 200, 0.1);
      color: ${colors.formsGlobalColorHover};
      border: 1px solid ${colors.formsGlobalColorHover};
      transition: all .2s ease;
    }
  }
`;

export default StyledSpendingModal;
