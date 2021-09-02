import styled from 'styled-components';
import colors from "@src/colors";

const StyledWeeklyStats = styled.div`
  width: 300px;
  height: 250px;
  background-color: ${colors.grey0};
  border: 1px solid #fff;
  border-radius: 3px;

  .header {
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
      display: flex;
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 5px;
      cursor: default;
      user-select: none;
      .label {
        margin-top: 1px;
      }
      .ceiling-input {
        margin-left: 5px;
        color: ${colors.initialAmount};
        font-weight: 700;
        padding: 1px;
        &.on {
          cursor: pointer;
          &:hover {
            background-color: ${colors.initialAmountHover};
          }
        }
      }
      input {
        // hack to remove in Chrome, input colors
        // https://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs
        // https://stackoverflow.com/questions/34551637/css-webkit-transition-not-working-on-input-type
        // https://github.com/styled-components/styled-components/issues/492
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-transition-delay: 9999s;
        }
        // ////////////////////////////////////////
        position: relative;
        top: -2px;
        color: ${colors.initialAmount};
        font-size: 12px;
        font-weight: 700;
        width: 60px;
        text-align: center;
        background-color: transparent;
        border-bottom: 1px solid ${colors.formsGlobalColor};
        outline: none;
        &:focus {
          outline: none;
          border-bottom: 1px solid ${colors.formsGlobalColor};
          transition: all .2s ease;
        }
      }
    }
    
    .average-weekly-amount {
      font-size: 11px;
      margin-top: 5px;
      text-transform: uppercase;
      user-select: none; 
      .average-value {
        margin-left: 4px;
        font-weight: 700;
      }
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
        width: 10px;
        font-size: 13px;
        margin-right: 5px;

        &.up {
          border-bottom: 1px solid ${colors.ceilingWarn};
          color: ${colors.ceilingWarn};
          &.excess {
            color: ${colors.ceilingExcess}
          }
        }

        &.down {
          border-top: 1px solid ${colors.ceilingOK};
          color: ${colors.ceilingOK};
        }
      }
      
      .exceeding-amount {
        font-size: 12px;
        color: ${colors.ceilingWarn};
        &.excess {
          color: ${colors.ceilingExcess};
        }
      }
      .remaining-amount {
        font-size: 12px;
        color: ${colors.generalOK};
        margin-left: 5px;
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
