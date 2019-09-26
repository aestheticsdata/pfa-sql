import styled from 'styled-components/macro';
import cssSizes from '../../../css-sizes';

const StyledSpendingDashboard = styled.div`
  background-color: yellow;
  width: 100%;
  height: ${cssSizes.dashboardHeight}px;
  position: fixed;
  top: ${cssSizes.navbarHeight}px;
  z-index: 100;
  
  .recurring-spendings-container {
    width: 200px;
    height: 200px;
    background-color: darkseagreen;
  }
`;

export default StyledSpendingDashboard;
