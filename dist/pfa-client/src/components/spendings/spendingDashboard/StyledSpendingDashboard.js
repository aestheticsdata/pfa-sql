"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddingDashboard = void 0;
var macro_1 = __importDefault(require("styled-components/macro"));
var css_sizes_1 = __importDefault(require("@src/css-sizes"));
var colors_1 = __importDefault(require("@src/colors"));
exports.paddingDashboard = '10';
var StyledSpendingDashboard = macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100%;\n  box-shadow: 1px 4px 21px 6px rgba(0,0,0,0.54);\n  border-bottom: 2px solid ", ";\n  border-top: 2px solid ", ";\n  height: ", " + ", "px;\n  padding: ", "px 0;\n  position: fixed;\n  top: ", "px;\n  z-index: 100;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n"], ["\n  background-color: ", ";\n  width: 100%;\n  box-shadow: 1px 4px 21px 6px rgba(0,0,0,0.54);\n  border-bottom: 2px solid ", ";\n  border-top: 2px solid ", ";\n  height: ", " + ", "px;\n  padding: ", "px 0;\n  position: fixed;\n  top: ", "px;\n  z-index: 100;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n"])), colors_1.default.grey2, colors_1.default.grey1, colors_1.default.grey1, css_sizes_1.default.dashboardHeight, exports.paddingDashboard, exports.paddingDashboard, css_sizes_1.default.navbarHeight);
exports.default = StyledSpendingDashboard;
var templateObject_1;
