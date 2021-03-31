import styled from 'styled-components/macro';
import cssSizes from '@src/css-sizes';
import { paddingDashboard } from './spendingDashboard/StyledSpendingDashboard';

const StyledSpendings = styled.div`
  position: relative;
  top: ${cssSizes.navbarHeight + cssSizes.dashboardHeight}px;
  padding-top: 10px;
  
  .spendings-container {
    display: block;
    height: auto;
    overflow: auto;
    width: 1520px;
    margin: 20px auto 10px auto;
  }
`;

export default StyledSpendings;
