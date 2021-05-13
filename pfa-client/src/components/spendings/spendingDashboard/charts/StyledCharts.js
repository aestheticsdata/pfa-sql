import styled from 'styled-components';
import colors from "@src/colors";
import header from "@components/spendings/spendingDashboard/common/css/header";

const StyledCharts = styled.div` 
  .header {
    ${header};
  }

  .spinner {
    text-align: center;
    padding-top: 60px;
  }

  .stats-container {
    height: 185px;
    overflow: hidden;
    overflow-y: auto;
    
    .charts-icon {
      display: flex;
      justify-content: center;
      font-size: 90px;
      color: ${colors.grey01};
      margin-top: 40px;
    }

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
