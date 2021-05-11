import styled from 'styled-components';
import colors from "@src/colors";
import adjustFontColor from "@components/common/helpers/adjustFontColor";

const StyledChartTooltip = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: ${colors.grey1};
  border-radius: 3px;
  border: 1px solid ${colors.grey0};
  font-size: 11px;
  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);

  .tooltip-value {
    text-align: center;
    padding: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    height: 50%;
  }
  
  .tooltip-category-label {
    height: 50%;
    text-align: center;
    padding-top: 6px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: ${props => props.categoryInfos?.bgcolor ? props.categoryInfos.bgcolor : '#fff'};
    color: ${props => props.categoryInfos?.bgcolor ? adjustFontColor(props.categoryInfos.bgcolor) : '#000'}
  }
`;

export default StyledChartTooltip;
