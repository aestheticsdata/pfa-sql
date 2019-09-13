import styled from 'styled-components';
import bank from './sharon-mccutcheon-8lnbXtxFGZw-unsplash-low-blured.jpg';

const StyledNotFoundComponent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  
  
  .bank {
    height: 100%;
    width: 100%;
    background: url(${bank}) no-repeat center center;
    background-size: cover;
  }
  .notfound404 {
    display: block;
    position: absolute;
    z-index: 2;
    font-size: 120px;
    color: #fff;
    background-color: rgba(100, 100, 100, 0.7);
    border-radius: 5px;
    width: 400px;
    height: 300px;
    text-align: center;
    top: 120px;
    
    .title {
    }
    .text {
      font-size: 18px;
    }
  }
`;

export default StyledNotFoundComponent;
