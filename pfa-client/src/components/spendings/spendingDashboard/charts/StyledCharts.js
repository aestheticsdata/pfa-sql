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

  .stats-container {
    height: 232px;
    overflow: hidden;
    overflow-y: scroll;
    
    .bar-container {
      display: flex;
      margin: 5px 0;
      height: 20px;
      .percent-value {
        font-size: 10px;
        margin-left: 4px;
        line-height: 1.9;
      }
    }
    
    .tooltip {
      position: absolute;
      background-color: ${colors.grey1};
      border-radius: 3px;
      padding: 3px;
      font-size: 11px;
    }
  }
`;

export default StyledCharts;
