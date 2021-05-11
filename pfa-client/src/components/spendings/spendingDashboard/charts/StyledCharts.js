import styled from 'styled-components';
import colors from "@src/colors";

const StyledCharts = styled.div`
  width: 300px;
  height: 250px;
  background-color: ${colors.grey0};
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: default;
  user-select: none;
  font-size: 11px;
  
  .header {
    width: 80%;
    font-weight: 800;
    margin: 10px auto;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(110,110,110);
    font-size: 13px;
    text-transform: uppercase;
    .date {
      font-weight: initial;
    }
  }

  .stats-container {
    height: 185px;
    overflow: hidden;
    overflow-y: auto;

    .transition-bar-enter {
      opacity: 0.01;
      transform: scaleX(0);
      transform-origin: left;
    }
    .transition-bar-enter-active {
      opacity: 1;
      transform: scaleX(1);
      transition: all 300ms ease-in;
      transform-origin: left;
    }
    .transition-bar-exit {
      opacity: 1;
      transform: translate(0, 0);
    }
    .transition-bar-exit-active {
      opacity: 0.01;
      transform: translate(0, 10px);
      transition: all 300ms ease-out;
    }
    
    .bar-container {
      display: flex;
      margin: 5px 0;
      height: 15px;
      .percent-value {
        font-size: 10px;
        font-weight: 600;
        margin-left: 4px;
        line-height: 1.5;
      }
    }
  }
`;

export default StyledCharts;
