import styled from 'styled-components';
import bank from './sharon-mccutcheon-8lnbXtxFGZw-unsplash-low-blured.jpg';
import 'typeface-exo';

const StyledNotFoundComponent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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
    font-family: 'Exo', sans-serif;
    display: block;
    position: absolute;
    padding-top: 120px;
    z-index: 2;
    font-size: 120px;
    color: #fff;
    background-color: rgba(100, 100, 100, 0.8);
    border-radius: 5px;
    width: 500px;
    height: 400px;
    text-align: center;
    top: 120px;
    
    .title {
    }
    .text {
      font-size: 24px;
    }
  }
`;

export default StyledNotFoundComponent;
