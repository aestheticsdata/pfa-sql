import styled, { css } from 'styled-components/macro';
import colors from '@src/colors';

const common = css`
  position: absolute;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${colors.sortbutton};
  border-radius: 3px;
  padding: 2px 5px;
  display: inline-block;
  top: 4px;
    .icon {
      position: relative;
      font-size: 10px;
      margin: 0 2px 0 6px;
    }
  &:hover {
    border: 1px solid ${colors.sortButtonHover};
    color: ${colors.sortButtonHover};
  }
  &:active {
    background-color: ${colors.sortButtonHoverActive};
  }
`;

const StyledSpendingSort = styled.div`
  .spending-sort-container {
    position: relative;
    user-select: none;
    height: 30px;
    color: ${colors.grey3};
    

    .label-sort {
      left: 5px;
      ${common}
    }

    .category-sort {
      left: 202px;
      ${common}

    }

    .amount-sort {
      right: 10px;
      ${common}

    }
  }
`;

export default StyledSpendingSort;
