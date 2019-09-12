import styled from 'styled-components/macro';
import cssSizes from '../../css-sizes';
import logo from './logo.png';

const StyledNavBar = styled.div`
  position: relative;
  background-color: #3b4755;
  color: #aee4ff;
  height: ${cssSizes.navbarHeight}px;
  padding-top: 10px;
  
  .logo {
    display: inline-block;
    background-image: url(${logo});
    width: 40px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    float: left;
    margin: 0 10px;
  }

  .link {
    display: inline-block;
    padding: 10px;
    outline: none;
    color: white;
    text-decoration: none;
    
    &.active {
      color: #67f3ff;
    }
    
    &:hover {
      color: #4b4b4b;
      background-color: #fff;
    }
  }
`;

export default StyledNavBar;
