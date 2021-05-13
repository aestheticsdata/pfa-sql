import localesDates from "@src/i18n/locales-dates";
import Cookie from "js-cookie";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import {useSelector} from "react-redux";
import { getFormattedDate } from "@components/datePickerWrapper/helpers";
import { getLang } from "@helpers/lang";
import { MONTHLY } from "@components/spendings/spendingDashboard/common/widgetHeaderConstants";

const WidgetHeader = ({ title, periodType }) => {
  const dateRange = useSelector(state => state.dateRangeReducer.dateRange);

  return (
    <div className="header">
      <div className="title">
        {title}
      </div>
      <div className="date">
        {
          periodType === MONTHLY ?
            <>
              <span className="month">{localesDates[Cookie.get('lang')].MONTHS[getMonth(dateRange.to)]}</span>
              <span className="year">{getYear(dateRange.to)}</span>
            </>
            :
            <>
              {getFormattedDate(new Date(dateRange.from), getLang())} -{' '}
              {getFormattedDate(new Date(dateRange.to), getLang())}
            </>

        }
      </div>
    </div>
  );
};

export default WidgetHeader;
