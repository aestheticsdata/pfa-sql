"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerHeightdashboard = exports.containerHeight = exports.containerWidthdashboard = exports.containerWidth = void 0;
var macro_1 = __importStar(require("styled-components/macro"));
var colors_1 = __importDefault(require("@src/colors"));
exports.containerWidth = 485;
exports.containerWidthdashboard = 350;
exports.containerHeight = 330;
exports.containerHeightdashboard = 250;
var itemslistcontainer = macro_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  overflow-y: auto;\n\n  .spinner {\n    text-align: center;\n    padding-top: 60px;\n  }\n"], ["\n  overflow: hidden;\n  overflow-y: auto;\n\n  .spinner {\n    text-align: center;\n    padding-top: 60px;\n  }\n"])));
var StyledSpendingDayItem = macro_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  //float: ", ";\n  margin: ", ";\n  padding: 10px;\n  border-radius: 5px;\n  \n  &.today-border {\n    border: 1px solid ", ";    \n  } \n\n  .spending-modal {\n    position: relative;\n    z-index: 1;\n  }\n  \n  .header {\n    width: 100%;\n    height: 30px;\n    \n    .recurrings {\n      float: left;\n      text-align: center;\n      font-weight: 800;\n      width: ", "px;;\n      color: ", ";\n      border: 1px solid ", ";\n      border-radius: 5px;\n      padding: 5px;\n      margin-bottom: 5px;\n    }\n    \n    .date {\n      float: left;\n      text-align: center;\n      font-weight: 800;\n      width: ", "px;\n      color: #0a313f;\n      border: 1px solid ", ";\n      background-color: ", ";\n      border-radius: 5px;\n      padding: 5px;\n      margin-bottom: 5px;\n      &.today {\n        background-color: ", ";\n      }\n    }\n    \n    .add-spending {\n      float: right;\n      margin-top: 6px;\n      user-select: none;\n      cursor: pointer;\n      color: ", ";\n      font-size: 18px;\n      \n      &:hover {\n        color: ", ";\n      }\n      \n      &.disabled {\n        cursor: not-allowed;\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n  \n  .total {\n    text-align: center;\n    margin: 10px 0;\n    border-bottom: 1px solid ", ";\n    padding-bottom: 10px;\n    \n    .total-label {\n      text-transform: uppercase;\n      margin-right: 5px;\n    }\n    \n    .total-amount {\n      font-weight: 800;\n    }\n  }\n  \n  .recurrings-list-container {\n    ", ";\n    height: 120px;\n  }\n  \n  .spendings-list-container {\n    ", ";\n    height: 200px;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  //float: ", ";\n  margin: ", ";\n  padding: 10px;\n  border-radius: 5px;\n  \n  &.today-border {\n    border: 1px solid ", ";    \n  } \n\n  .spending-modal {\n    position: relative;\n    z-index: 1;\n  }\n  \n  .header {\n    width: 100%;\n    height: 30px;\n    \n    .recurrings {\n      float: left;\n      text-align: center;\n      font-weight: 800;\n      width: ", "px;;\n      color: ", ";\n      border: 1px solid ", ";\n      border-radius: 5px;\n      padding: 5px;\n      margin-bottom: 5px;\n    }\n    \n    .date {\n      float: left;\n      text-align: center;\n      font-weight: 800;\n      width: ", "px;\n      color: #0a313f;\n      border: 1px solid ", ";\n      background-color: ", ";\n      border-radius: 5px;\n      padding: 5px;\n      margin-bottom: 5px;\n      &.today {\n        background-color: ", ";\n      }\n    }\n    \n    .add-spending {\n      float: right;\n      margin-top: 6px;\n      user-select: none;\n      cursor: pointer;\n      color: ", ";\n      font-size: 18px;\n      \n      &:hover {\n        color: ", ";\n      }\n      \n      &.disabled {\n        cursor: not-allowed;\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n  \n  .total {\n    text-align: center;\n    margin: 10px 0;\n    border-bottom: 1px solid ", ";\n    padding-bottom: 10px;\n    \n    .total-label {\n      text-transform: uppercase;\n      margin-right: 5px;\n    }\n    \n    .total-amount {\n      font-weight: 800;\n    }\n  }\n  \n  .recurrings-list-container {\n    ", ";\n    height: 120px;\n  }\n  \n  .spendings-list-container {\n    ", ";\n    height: 200px;\n  }\n"])), function (props) { return props.recurringType ? exports.containerWidthdashboard + 'px' : exports.containerWidth + 'px'; }, function (props) { return props.recurringType ? exports.containerHeightdashboard + 'px' : exports.containerHeight + 'px'; }, colors_1.default.grey0, colors_1.default.grey2, function (props) { return props.recurringType ? 'none' : 'left'; }, function (props) { return props.recurringType ? 'initial' : '20px 10px'; }, colors_1.default.datePickerWrapper, exports.containerWidthdashboard - 50, colors_1.default.grey2, colors_1.default.grey2, exports.containerWidth - 50, colors_1.default.grey2, colors_1.default.grey1, colors_1.default.datePickerWrapper, colors_1.default.grey1, colors_1.default.addSpendingHover, colors_1.default.grey1, colors_1.default.grey2, itemslistcontainer, itemslistcontainer);
exports.default = StyledSpendingDayItem;
var templateObject_1, templateObject_2;
