import styled from 'styled-components/macro';
import colors from '@src/colors';
import cssSizes from '@src/css-sizes';

const StyledDatePickerWrapper = styled.div`
  position: relative;
  z-index: 3;
  
  // to enable click to close on the left of caption
  height: 0;
  // ///////////////////////////////////////////////
  
  .caption {
    border: 1px solid ${colors.datePickerWrapper};
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    background-color: ${colors.datePickerWrapperBackground};
    margin-bottom: 5px;
    padding: 5px;
    @media(max-width: ${cssSizes.responsiveMaxWidth}px) {
      width: 115px;
      font-size: 9px;
      margin-left: 5px;
    }
    @media(min-width: ${cssSizes.responsiveMinWidth}px) {
      width: 215px;
    }
    color: ${colors.datePickerWrapper};;
    user-select: none;
  }
  .date-picker {
    background-color: ${colors.calendarBackground};
    
    .DayPicker-Month {
      border-collapse: separate;
    }
    .DayPicker-WeekNumber {
      outline: none;
    }
    .DayPicker-Day {
      outline: none;
      border: 1px solid transparent;
    }
    .DayPicker-Day--hoverRange {
      background-color: #60605c !important;
    }
  
    .DayPicker-Day--selectedRange {
      background-color: #fff7ba !important;
      border-top-color: #FFEB3B;
      border-bottom-color: #FFEB3B;
      border-left-color: #fff7ba;
      border-right-color: #fff7ba;
    }
  
    .DayPicker-Day--selectedRangeStart {
      background-color: #FFEB3B !important;
      border-left: 1px solid #FFEB3B;
    }
  
    .DayPicker-Day--selectedRangeEnd {
      background-color: #FFEB3B !important;
      border-right: 1px solid #FFEB3B;
    }
  
    .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
    .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
      border-radius: 0 !important;
      color: black !important;
    }
    .DayPicker-Day--hoverRange:hover {
      border-radius: 0 !important;
    }
  }
  
`;

export default StyledDatePickerWrapper;
