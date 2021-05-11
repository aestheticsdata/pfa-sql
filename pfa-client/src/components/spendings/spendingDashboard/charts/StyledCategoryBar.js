import styled from 'styled-components';

const StyledCategoryBar = styled.div`
  background-color: ${props => props.bgcolor || '#fff'};
  ${props => props.bgcolor === null && `
    background: repeating-linear-gradient(
      135deg,
      white,
      white 10px,
      #eee 10px,
      #eee 11px
    );
  `}
  .bar {
    height: 100%;
    span {
      line-height: 1.7;
      padding-left: 2px;
    }
  }
`;

export default StyledCategoryBar;
