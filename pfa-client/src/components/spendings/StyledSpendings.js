import styled from 'styled-components/macro';
import cssSizes from '../../css-sizes';

const StyledSpendings = styled.div`
  position: relative;
  top: ${cssSizes.navbarHeight + cssSizes.dashboardHeight}px;
  padding-top: 10px;
  
  .spendings-container {
    height: 1020px;
    width: 1520px;
    margin: 0 auto;
  }
`;

export default StyledSpendings;
