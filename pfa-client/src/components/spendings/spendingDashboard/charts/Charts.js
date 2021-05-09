import StyledCharts from "@components/spendings/spendingDashboard/charts/StyledCharts";
import StyledCategoryBar from './StyledCategoryBar';
import {
  useEffect,
  useState,
} from "react";
import { privateRequest } from "@helpers/requestHelper";
import { useSelector } from "react-redux";
import Tooltip from "@components/spendings/spendingDashboard/charts/Tooltip";


const getMaxValue = data => Math.max(...data.map(category => +category.value));
const getTotal = data => data.reduce((acc, curr) => acc + curr.value, 0);

const widthOfContainer = 240; // 300 - (border width * 2)



const Charts = () => {
  const [maxv, setMaxv] = useState(0);
  const [total, setTotal] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [categoryInfos, setCategoryInfos] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({x: 0, y: 0});
  const [weeklyCharts, setWeeklyCharts] = useState([]);
  const user = useSelector(state => state.loginReducer.user);
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);

  const getCharts = async () => {
    try {
      const charts = await privateRequest(`/spendings/weeklyCharts?userID=${user.id}&from=${dateRange.from}&to=${dateRange.to}`);
      setWeeklyCharts(charts.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setMaxv(0);
    getCharts();
  }, [dateRange]);

  useEffect(() => {
    setMaxv(getMaxValue(weeklyCharts));
    setTotal(getTotal(weeklyCharts));
  }, [weeklyCharts]);

  const getWidth = value => {
    let width;
    if (maxv !== 0) {
      width = (value * widthOfContainer) / maxv;
    }
    // if (total !== 0) {
    //   width = (value * widthOfContainer) / total;
    // }
    return width;
  }

  return (
    <StyledCharts tooltipPos={tooltipPos} >
      <div className="header">amount by categories</div>
      <div className="stats-container">
        {
          maxv !== 0 &&
            weeklyCharts.map(category => {
              return (
                <div
                  className="bar-container"
                  key={category.label}
                >
                  <StyledCategoryBar
                    bgcolor={category.bgcolor}
                    width={getWidth(category.value)}
                  >
                    <div
                      className="bar"
                      onMouseEnter={() => setIsTooltipVisible(true)}
                      onMouseLeave={() => setIsTooltipVisible(false)}
                      onMouseMove={e => {
                        setTooltipPos({x: e.clientX, y: e.clientY});
                        setCategoryInfos(category);
                      }}
                    />
                  </StyledCategoryBar>
                  <div className="percent-value">
                    {Number((category.value / total) * 100).toFixed(1)}%
                  </div>
                </div>
              )
            })
        }
        {
          isTooltipVisible && categoryInfos && (
           <Tooltip
             tooltipPos={tooltipPos}
             categoryInfos={categoryInfos}
             currency={user.baseCurrency}
           />
          )
        }
      </div>
    </StyledCharts>
  )
}

export default Charts;
