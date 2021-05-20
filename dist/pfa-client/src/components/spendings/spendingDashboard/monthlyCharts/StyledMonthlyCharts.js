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
var StyledMonthlyCharts = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 300px;\n  height: 250px;\n  background-color: ", ";\n  border: 1px solid #fff;\n  border-radius: 3px;\n  cursor: default;\n  user-select: none;\n  font-size: 11px;\n"], ["\n  width: 300px;\n  height: 250px;\n  background-color: ", ";\n  border: 1px solid #fff;\n  border-radius: 3px;\n  cursor: default;\n  user-select: none;\n  font-size: 11px;\n"])), colors_1.default.grey0);
exports.default = StyledMonthlyCharts;
var templateObject_1;
