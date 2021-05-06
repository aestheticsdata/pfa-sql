import styled from 'styled-components';

const StyledCategoryBar = styled.div`
  background-color: ${props => props.bgcolor || '#fff'};
  width: ${props => props.width + 'px'};
`;

export default StyledCategoryBar;
