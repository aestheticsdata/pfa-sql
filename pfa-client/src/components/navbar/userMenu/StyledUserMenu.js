import styled from 'styled-components';

const StyledUserMenu = styled.div`
  position: absolute;
  background-color: transparent;
  right: 110px;
  top: 20px;
  width: 150px;
  height: 60px;
  cursor: pointer;

  .email {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130px;
    float: right;  
  }
`;

export default StyledUserMenu;
