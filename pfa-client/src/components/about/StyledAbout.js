import styled from 'styled-components';
import cssSizes from '@src/css-sizes';
import colors from "@src/colors";

const StyledAbout = styled.div`
  position: relative;
  top: ${cssSizes.navbarHeight}px;
  line-height: 2;
  font-size: 18px;
  padding: 10px;
  background-color: ${colors.grey0};
`;

export default StyledAbout;
