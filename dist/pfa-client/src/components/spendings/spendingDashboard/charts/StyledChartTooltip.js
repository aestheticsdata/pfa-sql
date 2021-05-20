"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("@src/colors"));
var adjustFontColor_1 = __importDefault(require("@components/common/helpers/adjustFontColor"));
var StyledChartTooltip = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  width: 100px;\n  height: 50px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  font-size: 11px;\n  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);\n\n  .tooltip-value {\n    text-align: center;\n    padding: 5px;\n    color: #fff;\n    font-size: 14px;\n    font-weight: 700;\n    height: 50%;\n  }\n  \n  .tooltip-category-label {\n    height: 50%;\n    text-align: center;\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-weight: 600;\n    background-color: ", ";\n    color: ", "\n  }\n"], ["\n  position: absolute;\n  width: 100px;\n  height: 50px;\n  background-color: ", ";\n  border-radius: 3px;\n  border: 1px solid ", ";\n  font-size: 11px;\n  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);\n\n  .tooltip-value {\n    text-align: center;\n    padding: 5px;\n    color: #fff;\n    font-size: 14px;\n    font-weight: 700;\n    height: 50%;\n  }\n  \n  .tooltip-category-label {\n    height: 50%;\n    text-align: center;\n    padding-top: 6px;\n    text-transform: uppercase;\n    font-weight: 600;\n    background-color: ", ";\n    color: ", "\n  }\n"])), colors_1.default.grey1, colors_1.default.grey0, function (props) { var _a; return ((_a = props.categoryInfos) === null || _a === void 0 ? void 0 : _a.bgcolor) ? props.categoryInfos.bgcolor : '#fff'; }, function (props) { var _a; return ((_a = props.categoryInfos) === null || _a === void 0 ? void 0 : _a.bgcolor) ? adjustFontColor_1.default(props.categoryInfos.bgcolor) : '#000'; });
exports.default = StyledChartTooltip;
var templateObject_1;
