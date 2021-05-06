import StyledCharts from "@components/spendings/spendingDashboard/charts/StyledCharts";
import StyledCategoryBar from './StyledCategoryBar';
import { useEffect, useState } from "react";
import { privateRequest } from "@helpers/requestHelper";
import {useSelector} from "react-redux";


const getMaxValue = data => Math.max(...data.map(category => +category.value));

const widthOfContainer = 298; // 300 - (border width * 2)



const Charts = () => {
  const [maxv, setMaxv] = useState(0);
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
    getCharts();
  }, []);

  useEffect(() => {
    setMaxv(getMaxValue(weeklyCharts));
  }, [weeklyCharts])

  const getWidth = value => {
    let width;
    if (maxv !== 0) {
      width = (value * widthOfContainer) / maxv;
    }
    return width;
  }

  return (
    <StyledCharts>
      <div className="header">amount by categories</div>
      <div className="stats-container">
        {
          maxv !== 0 &&
            weeklyCharts.map(category => {
              return (
                <StyledCategoryBar
                  key={category.label}
                  bgcolor={category.bgcolor}
                  width={getWidth(category.value)}
                >
                  <span>{category.label}</span>
                  <span>{category.value}</span>
                </StyledCategoryBar>
              )
            })
        }
      </div>
    </StyledCharts>
  )
}

export default Charts;
