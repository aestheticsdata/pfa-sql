import styled from 'styled-components/macro';
import cssSizes from '../../css-sizes';

const StyledLogin = styled.div`
  min-height: calc(100vh - ${cssSizes.navbarHeight}px);
  background: linear-gradient(-45deg, rgba(87, 156, 212) 0%, rgba(131,234,210,1) 99%);
  
  .login-container {
    position: relative;
    top: 100px;
    background-color: #fff;
    margin: 0 auto;
    width: 50%;
    padding: 10px;
    border-radius: 5px;

    .pwd-forgot {
      margin: 5px 0;
      &:hover {
        color: rgba(131,234,210,1);
      }
    }
  }
`;

export default StyledLogin;
