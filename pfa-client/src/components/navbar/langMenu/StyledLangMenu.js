import styled from 'styled-components';
import cssSizes from '@src/css-sizes';

const StyledLangMenu = styled.div`
  position: absolute;
  background-color: transparent;
  right: 0;
  top: 20px;
  @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
    width: 80px;
  }
  @media(min-width: ${cssSizes.responsiveMinWidth}px) {
    width: 100px;
  }
  height: 60px;
  cursor: pointer;
`;

export default StyledLangMenu;
