import styled from 'styled-components';

const StyledCategoryBar = styled.div`
  background-color: ${props => props.bgcolor || '#fff'};
  transition: width 1s ease-in-out;
  width: ${props => props.width + 'px'};
  .bar {
    height: 100%;
    span {
      line-height: 1.7;
      padding-left: 2px;
    }
  }
`;

export default StyledCategoryBar;
