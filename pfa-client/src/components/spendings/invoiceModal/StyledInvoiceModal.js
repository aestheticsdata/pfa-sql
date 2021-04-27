import styled from 'styled-components';
import colors from "@src/colors";
import { buttonMixin } from "@components/shared/sharedCSS/sharedFormsCSS";

const StyledInvoiceModal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.invoiceFileModalBackground};

  .modal-content {
    position: absolute;
    top: 10%;
    left: 35%;
    width: 500px;
    height: 530px;
    
    background-color: ${colors.grey0};
    border-radius: 5px;
    overflow: hidden;

    .header {
      padding: 10px 5px;
      height: 40px;
      background: ${colors.grey0};
      border-bottom: 2px solid ${colors.grey1};
      font-weight: 600;
      
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
    
    // https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
    // https://codepen.io/nopr/pen/rpsnd
    .inputfile-container {
      text-align: center;
      .invoice-inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;

        & + .label-wrapper {
          position: absolute;
          width: 100%;
          background-color: ${colors.grey0};
          height: 100%;
          
          label {
            display: inline-block;
            position: relative;
            top: 40px;
            height: 120px;
            color: ${colors.grey2};
            .input-filename {
              position: relative;
            }
            .choose-file {
              position: relative;
              width: 230px;
              top: 15px;
              .upload-icon {
                svg {
                  position: relative;
                  font-size: 60px;
                  &:hover {
                    cursor: pointer;
                    color: ${colors.addSpendingHover};
                  }
                }
              }
              .upload-choosefile-label {
                font-weight: 600;
                font-size: 19px;
                text-align: center;
              }
              .onlyformat {
                font-size: 11px;
                text-align: center;
                line-height: 1;
              }
            }
            .input-filename {
              position: relative;
              top: 50px;
              font-size: 20px;
              font-weight: 700;
              &:hover {
                cursor: pointer;
                color: ${colors.addSpendingHover};
              }
            }
          }
        }
  
        // when using keyboard tab to select input
        //&:focus + .label-wrapper {
        //  label {
        //    color: orange;
        //    outline: 1px dotted #000;
        //  }
        //}
      }

      .upload-submit-btn {
        position: relative;
        top: 160px;
        ${buttonMixin};
      }
            
      .delete-btn {
        position: relative;
        top: 100px;
        ${buttonMixin};
      }
    }
    
    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 250px;
      border-bottom: 2px solid ${colors.grey1};
      
      .no-invoice {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid ${colors.grey1};
        border-radius: 5px;
        font-size: 24px;
        text-align: center;
        width: 80%;
        height: 80%;
      }
  
      img {
        display: block;
        max-height: 245px;
        max-width: 100%;
      }

      .invoice-image {
        //position: relative;
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
