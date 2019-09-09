import styled from 'styled-components/macro';
import cssSizes from '../../css-sizes';

const StyledRegister = styled.div`
  .register-container {
    position: relative;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
    top: 100px;
    background: linear-gradient(-45deg, rgba(87, 156, 212) 0%, rgba(131,234,210,1) 99%);
    margin: 0 auto;
    width: ${cssSizes.loginFormsWidth}px;
    padding: 10px;
    border-radius: 5px;
  }
  .register-error {
    
  }
`;

export default StyledRegister;
