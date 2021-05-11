import { FormattedNumber } from "react-intl";
import StyledChartTooltip from "@components/spendings/spendingDashboard/charts/StyledChartTooltip";
import { useIntl } from 'react-intl';
import messages from "@components/spendings/messages";

const Tooltip = ({ tooltipPos, categoryInfos, currency }) => {
  const intl = useIntl();

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
      {
        categoryInfos && (
          <div className="tooltip-category-label">
            {categoryInfos?.label ?? intl.formatMessage({ ...messages.uncategorized })}
          </div>
        )
      }
    </StyledChartTooltip>
  )
};

export default Tooltip;
