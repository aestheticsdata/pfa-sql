import styled from 'styled-components';
import colors from "@src/colors";

const StyledInvoiceModal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(116, 118, 117, 0.9);

  .modal-content {
    position: absolute;
    top: 10%;
    left: 35%;
    width: 30%;
    min-width: 500px;
    max-width: 500px;
    height: 80%;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;

    .header {
      padding: 10px 5px;
      height: 40px;
      background: ${colors.grey0};
      
      .label {
        margin-left: 5px;
      }
      
      .amount {
        margin-left: 10px;
      }

      .category {
        display: inline-block;
        margin-left: 10px;
        width: 104px;
        height: 18px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3;
        border: 1px solid ${colors.categoryBorder};
      }
    }
    
    .image-container {
      height: 250px;
      
      .no-invoice {
        position: relative;
        border: 3px solid ${colors.grey1};
        border-radius: 5px;
        font-size: 24px;
        text-align: center;
        width: 80%;
        height: 80%;
        margin: 0 auto;
        top: 25px;
        .no-invoice-label {
          line-height: 7;
        }
      }
  
      img {
        display: block;
        margin: 0 auto;
        max-height: 100%;
        max-width: 100%;
      }

      .invoice-image {
        cursor: pointer;
        border: 1px solid white;
    
        &:hover {
          border: 1px solid #ecec6d;
        }
      }
    }
    
  }

`;

export default StyledInvoiceModal;
