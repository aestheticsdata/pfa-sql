import styled from 'styled-components';
import colors from "@src/colors";
import adjustFontColor from "@components/common/helpers/adjustFontColor";

const StyledChartTooltip = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: ${props => adjustFontColor(props.categoryInfos.bgcolor ?? '#fff')};
  border-radius: 3px;
  border: 1px solid ${colors.grey2};
  padding: 5px;
  font-size: 11px;
  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);

  .tooltip-value {
    color: white;
    font-size: 12px;
    font-weight: 700;
  }  
`;

export default StyledChartTooltip;
