import StyledCharts from "@components/spendings/spendingDashboard/charts/StyledCharts";
import StyledCategoryBar from './StyledCategoryBar';
import {
  useEffect,
  useState,
} from "react";
import { privateRequest } from "@helpers/requestHelper";
import { useSelector } from "react-redux";
import Tooltip from "@components/spendings/spendingDashboard/charts/Tooltip";
import messages from "@components/spendings/messages";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import WidgetHeader from "@components/spendings/spendingDashboard/common/WidgetHeader";


const getMaxValue = data => Math.max(...data.map(category => +category.value));
const getTotal = data => data.reduce((acc, curr) => acc + curr.value, 0);

const widthOfContainer = 240; // 300 - (border width * 2)



const Charts = ({ url, currency, title, periodType }) => {
  const [maxv, setMaxv] = useState(0);
  const [total, setTotal] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({x: 0, y: 0});
  const [categoryInfos, setCategoryInfos] = useState(null);
  const [weeklyCharts, setWeeklyCharts] = useState([]);

  const spendingsIsLoading = useSelector(state => state.spendingsReducer.isLoading);

  const getCharts = async () => {
    try {
      const charts = await privateRequest(url);
      setWeeklyCharts(charts.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (spendingsIsLoading === false) {
      setMaxv(0);
      getCharts();
    }
  }, [spendingsIsLoading]);

  useEffect(() => {
    setMaxv(getMaxValue(weeklyCharts));
    setTotal(getTotal(weeklyCharts));
  }, [weeklyCharts]);

  const getWidth = value => {
    let width;
    if (maxv !== 0) {
      width = (value * widthOfContainer) / maxv;
    }
    return width;
  }

  return (
    <StyledCharts>
      <WidgetHeader
        title={title}
        periodType={periodType}
      />
      <div className="stats-container">
        {
          weeklyCharts.length === 0 && (
            <div className="charts-icon">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
          )
        }
        <TransitionGroup>
        {
          maxv !== 0 &&
            weeklyCharts.map(category => {
              return (
                <CSSTransition key={category.label + '-csstransition'} timeout={300} classNames="transition-bar">
                  <div
                    className="bar-container"
                    key={category.label}
                  >
                    <StyledCategoryBar bgcolor={category.bgcolor} >
                      <div
                        className="bar"
                        style={{
                          width: getWidth(category.value)
                        }}
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
                </CSSTransition>
              )
            })
        }
        </TransitionGroup>
        {
          isTooltipVisible && categoryInfos && (
           <Tooltip
             tooltipPos={tooltipPos}
             categoryInfos={categoryInfos}
             currency={currency}
           />
          )
        }
      </div>
    </StyledCharts>
  )
}

export default Charts;
