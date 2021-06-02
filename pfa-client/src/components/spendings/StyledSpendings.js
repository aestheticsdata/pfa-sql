import styled from 'styled-components/macro';
import cssSizes from '@src/css-sizes';
import { paddingDashboard } from './spendingDashboard/StyledSpendingDashboard';

const StyledSpendings = styled.div`
  position: relative;
  @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
    top: ${cssSizes.navbarHeight}px;
  }
  @media(min-width: ${cssSizes.responsiveMinWidth}px) {
    top: ${cssSizes.navbarHeight + cssSizes.dashboardHeight}px;
  }
  padding-top: 10px;

  .list-container {
    display: flex;
    justify-content: center;
  
    .spendings-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      height: auto;
      overflow: auto;
      width: 1515px;
      margin-top: 20px;
      
      @media(max-width: 1524px) {
        width: 1010px;
      }
      
      @media(max-width: 1024px) {
        width: 500px;
      }
    }
  }
`;

export default StyledSpendings;
