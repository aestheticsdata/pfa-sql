import styled from 'styled-components';

const StyledInvoiceModal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(116, 118, 117, 0.9);
  
  .active-zone {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: white;
  }
`;

export default StyledInvoiceModal;
