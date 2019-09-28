import styled from 'styled-components/macro';
import cssSizes from '../../../css-sizes';
import colors from '../../../colors'

export const paddingDashboard = '10';

const StyledSpendingDashboard = styled.div`
  background-color: ${colors.grey2};
  width: 100%;
  height: ${cssSizes.dashboardHeight} + ${paddingDashboard}px;
  padding: ${paddingDashboard}px 0;
  position: fixed;
  top: ${cssSizes.navbarHeight}px;
  z-index: 100;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  
  .recurring-spendings-container {
  }
`;

export default StyledSpendingDashboard;
