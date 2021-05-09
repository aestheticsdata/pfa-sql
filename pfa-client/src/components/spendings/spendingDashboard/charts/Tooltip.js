import { FormattedNumber } from "react-intl";
import adjustFontColor from "@components/common/helpers/adjustFontColor";
import StyledChartTooltip from "@components/spendings/spendingDashboard/charts/StyledChartTooltip";

const Tooltip = ({ tooltipPos, categoryInfos, currency }) => {
  return (
    <StyledChartTooltip
      tooltipPos={tooltipPos}
      categoryInfos={categoryInfos}
      style={{
        left: tooltipPos.x + 20 + 'px',
        top: tooltipPos.y - 50 + 'px',
      }}
    >
      <div className="tooltip-value">
        {
          categoryInfos && (
            <FormattedNumber
              value={categoryInfos.value}
              style="currency"
              currency={currency}
            />
          )
        }
      </div>
      <div className="tooltip-label">
        {categoryInfos?.label ?? 'uncatgeorized'}
      </div>
    </StyledChartTooltip>
  )
};

export default Tooltip;
