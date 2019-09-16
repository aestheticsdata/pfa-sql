import styled from 'styled-components/macro';
import cssSizes from '../../css-sizes';
// import logo from './logo.png';
import colors from '../../colors';

const StyledNavBar = styled.div`
  position: relative;
  background-color: ${colors.blueNavy};
  color: #aee4ff;
  height: ${cssSizes.navbarHeight}px;
  padding-top: 10px;
  
  .logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 37px;
    border-radius: 5px;
    float: left;
    margin: 0 10px;
    svg {
      fill: #ff3156;
    }
  }

  .usermenu {
  }
  
  .langmenu {
  }
  
  .base-currency {
    position: absolute;
    top: 15px;
    right: 280px;
     
    .symbol {
      font-size: 23px;
      margin-left: 10px;
    }
  }

  .link {
    display: inline-block;
    padding: 10px;
    outline: none;
    color: white;
    text-decoration: none;
    
    &.active {
      color: #aee4ff;
    }
    
    &:hover {
      color: #4b4b4b;
      background-color: #aee4ff;
    }
  }
`;

export default StyledNavBar;
