import styled from 'styled-components/macro';
import cssSizes from '@src/css-sizes';
// import logo from './logo.png';
import colors from '@src/colors';

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 200;
  background-color: ${colors.blueNavy};
  color: #aee4ff;
  height: ${cssSizes.navbarHeight}px;
  padding-top: 10px;
  @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
    font-size: 12px;
  }

  .logo {
    @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
      display: none;
    }
    @media(min-width: ${cssSizes.responsiveMinWidth}px) {
      display: inline-block;
    }
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
    @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
      display: none;
    }
    position: absolute;
    top: 20px;
    right: 280px;

    .symbol {
      font-family: Arial, sans-serif;
      background-color: ${colors.grey2};
      margin-left: 10px;
      border-radius: 3px;
      padding: 5px;
    }
  }

  .flex-container {
    display: -webkit-flex; 
    display: flex;

    .nav-link-container {
      max-width: fit-content;
      flex: 1;
    }

    .date-picker-wrapper {
      margin-top: 4px;
      max-width: fit-content;
      flex: 1;
    }
  }


  .link {
    display: inline-block;
    padding: 10px;
    outline: none;
    color: white;
    text-decoration: none;
    
    &.spendings {
      @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
        display: none;
      }
    }

    &.categories {
      @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
        display: none;
      }
    }

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
