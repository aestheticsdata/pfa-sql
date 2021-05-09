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
    overflow-y: auto;
    
    .bar-container {
      display: flex;
      margin: 5px 0;
      height: 20px;
      .percent-value {
        font-size: 10px;
        font-weight: 600;
        margin-left: 4px;
        line-height: 1.9;
      }
    }
  }
`;

export default StyledCharts;
