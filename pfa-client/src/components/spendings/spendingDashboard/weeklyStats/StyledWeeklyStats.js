import styled from 'styled-components';
import colors from "@src/colors";

const StyledWeeklyStats = styled.div`
  width: 300px;
  height: 250px;
  background-color: ${colors.grey0};
  border: 1px solid #fff;
  border-radius: 3px;

  .weekly-stats-header {
    width: 80%;
    font-weight: 800;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(110, 110, 110);
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

  .weekly-stats-body {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto 20px auto;

    .ceiling {
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .week-slices-container {
      .week-slice {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 8px 0;
      }

      .days-slice {
        width: 60px;
      }

      .amount {
        width: 80px;
      }

      .arrow {
        width: 20px;
        font-size: 13px;

        &.up {
          color: ${colors.generalWarning};
        }

        &.down {
          color: ${colors.generalOK};
        }
      }
      
      .exceeding-amount {
        font-size: 12px;
        color: ${colors.generalWarning};
      }

      .current-week {
        font-weight: 700;
      }

      .spinner {
        text-align: center;
        padding-top: 60px;
      }
    }
  }
`;

export default StyledWeeklyStats;
