"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var StyledChartTooltip_1 = __importDefault(require("@components/spendings/spendingDashboard/charts/StyledChartTooltip"));
var react_intl_2 = require("react-intl");
var messages_1 = __importDefault(require("@components/spendings/messages"));
var Tooltip = function (_a) {
    var _b;
    var tooltipPos = _a.tooltipPos, categoryInfos = _a.categoryInfos, currency = _a.currency;
    var intl = react_intl_2.useIntl();
    return (<StyledChartTooltip_1.default tooltipPos={tooltipPos} categoryInfos={categoryInfos} style={{
            left: tooltipPos.x + 20 + 'px',
            top: tooltipPos.y - 50 + 'px',
        }}>
      <div className="tooltip-value">
        {categoryInfos && (<react_intl_1.FormattedNumber value={categoryInfos.value} style="currency" currency={currency}/>)}
      </div>
      {categoryInfos && (<div className="tooltip-category-label">
            {(_b = categoryInfos === null || categoryInfos === void 0 ? void 0 : categoryInfos.label) !== null && _b !== void 0 ? _b : intl.formatMessage(__assign({}, messages_1.default.uncategorized))}
          </div>)}
    </StyledChartTooltip_1.default>);
};
exports.default = Tooltip;
