import { DATE_RANGE_CHANGE } from './constants';

export const dateRangeChange = (dateRange) => {
  return {
    type: DATE_RANGE_CHANGE,
    dateRange,
  }
};
