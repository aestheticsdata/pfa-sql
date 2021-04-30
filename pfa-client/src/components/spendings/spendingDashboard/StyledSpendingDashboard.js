import styled from 'styled-components/macro';
import cssSizes from '@src/css-sizes';
import colors from '@src/colors'

export const paddingDashboard = '10';

const StyledSpendingDashboard = styled.div`
  background-color: ${colors.grey2};
  width: 100%;
  box-shadow: 1px 4px 21px 6px rgba(0,0,0,0.54);
  border-bottom: 2px solid ${colors.grey1};
  border-top: 2px solid ${colors.grey1};
  height: ${cssSizes.dashboardHeight} + ${paddingDashboard}px;
  padding: ${paddingDashboard}px 0;
  position: fixed;
  top: ${cssSizes.navbarHeight}px;
  z-index: 100;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;

export default StyledSpendingDashboard;
