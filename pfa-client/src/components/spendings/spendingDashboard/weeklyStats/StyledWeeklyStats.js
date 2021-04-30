import styled from 'styled-components';
import colors from "@src/colors";

const StyledWeeklyStats = styled.div`
  width: 300px;
  background-color: ${colors.grey0};
  border: 1px solid #fff;
  border-radius: 3px;
  
  .header {
    width: 80%;
    font-weight: 800;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(110,110,110);
    font-size: 13px;
    
    .date {
      font-weight: initial;
      text-transform: uppercase;
      margin-top: 2px;
      .year {
        margin-left: 3px;
      }
    }
  }
  
  .arrow {
    font-size: 13px;
    &.up {
      color: ${colors.generalWarning};
    }
    &.down {
      color: ${colors.generalOk};
    }
  }
  
  .current-week {
    font-weight: 700;
  }
`;

export default StyledWeeklyStats;
