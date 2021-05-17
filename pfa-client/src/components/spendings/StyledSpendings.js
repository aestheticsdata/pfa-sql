import styled from 'styled-components/macro';
import cssSizes from '@src/css-sizes';
import { paddingDashboard } from './spendingDashboard/StyledSpendingDashboard';

const StyledSpendings = styled.div`
  position: relative;
  top: ${cssSizes.navbarHeight + cssSizes.dashboardHeight}px;
  padding-top: 10px;
  
  .spendings-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: auto;
    overflow: auto;
    width: 1520px;
    margin: 20px auto 10px auto;
    
    @media(max-width: 1524px) {
      width: 1050px;
    }
    
    @media(max-width: 1024px) {
      width: 500px;
    }
  }
`;

export default StyledSpendings;
