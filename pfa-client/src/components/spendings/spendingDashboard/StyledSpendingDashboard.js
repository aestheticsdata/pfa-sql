import styled from 'styled-components/macro';
import cssSizes from '../../../css-sizes';

const StyledSpendingDashboard = styled.div`
  background-color: yellow;
  width: 100%;
  height: ${cssSizes.dashboardHeight}px;
  position: fixed;
  top: ${cssSizes.navbarHeight}px;
  z-index: 100;
`;

export default StyledSpendingDashboard;
