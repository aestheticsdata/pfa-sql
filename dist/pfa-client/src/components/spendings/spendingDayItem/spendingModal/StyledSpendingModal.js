"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var macro_1 = __importDefault(require("styled-components/macro"));
var colors_1 = __importDefault(require("@src/colors"));
var sharedFormsCSS_1 = require("@components/shared/sharedCSS/sharedFormsCSS");
var StyledSpendingDayItem_1 = require("../StyledSpendingDayItem");
var StyledSpendingModal = macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 33px;\n  right: 0;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  padding: 0 10px;\n  \n  input {\n    ", ";\n  }\n  \n  .spending-btn {\n    ", ";\n    \n    display: block;\n    margin: 10px auto;\n    width: 50%;\n    height: 20px;\n\n    &.copy-recurrings {\n      font-size: 10px;\n    }\n  }\n"], ["\n  position: absolute;\n  top: 33px;\n  right: 0;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  padding: 0 10px;\n  \n  input {\n    ", ";\n  }\n  \n  .spending-btn {\n    ", ";\n    \n    display: block;\n    margin: 10px auto;\n    width: 50%;\n    height: 20px;\n\n    &.copy-recurrings {\n      font-size: 10px;\n    }\n  }\n"])), colors_1.default.spendingItemHover, colors_1.default.spendingActionHover, colors_1.default.blueNavy, function (props) { return props.recurringType ? (StyledSpendingDayItem_1.containerWidthdashboard - 22) + 'px' : (StyledSpendingDayItem_1.containerWidth - 22) + 'px'; }, function (props) { return props.recurringType ? (StyledSpendingDayItem_1.containerHeightdashboard - 53) + 'px' : (StyledSpendingDayItem_1.containerHeight - 53) + 'px'; }, sharedFormsCSS_1.inputMixin, sharedFormsCSS_1.buttonMixin);
exports.default = StyledSpendingModal;
var templateObject_1;
