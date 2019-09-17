import styled from 'styled-components/macro';

const StyledDatePickerWrapper = styled.div`
  .caption {
    cursor: pointer;
  }
  .date-picker {
    background-color: #2b2a2a;
    
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
