import styled from 'styled-components/macro';

const StyledNavBar = styled.div`
  background-color: #3b4755;
  color: #aee4ff;

  .link {
    display: inline-block;
    padding: 10px;
    outline: none;
    color: white;
    text-decoration: none;
    
    &.active {
      color: #67f3ff;
    }
    
    &:hover {
      color: #4b4b4b;
      background-color: #fff;
    }
  }
  
`;

export default StyledNavBar;
