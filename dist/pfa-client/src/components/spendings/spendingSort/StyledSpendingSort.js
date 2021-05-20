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
var macro_1 = __importStar(require("styled-components/macro"));
var colors_1 = __importDefault(require("@src/colors"));
var common = macro_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  padding: 2px 5px;\n  display: inline-block;\n  top: 4px;\n    .icon {\n      position: relative;\n      font-size: 10px;\n      margin: 0 2px 0 6px;\n    }\n  &:hover {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"], ["\n  position: absolute;\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid ", ";\n  border-radius: 3px;\n  padding: 2px 5px;\n  display: inline-block;\n  top: 4px;\n    .icon {\n      position: relative;\n      font-size: 10px;\n      margin: 0 2px 0 6px;\n    }\n  &:hover {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"])), colors_1.default.sortbutton, colors_1.default.sortButtonHover, colors_1.default.sortButtonHover, colors_1.default.sortButtonHoverActive);
var StyledSpendingSort = macro_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .spending-sort-container {\n    position: relative;\n    user-select: none;\n    height: 30px;\n    color: ", ";\n    \n\n    .label-sort {\n      left: 5px;\n      ", "\n    }\n\n    .category-sort {\n      left: 202px;\n      ", "\n\n    }\n\n    .amount-sort {\n      right: 10px;\n      ", "\n\n    }\n  }\n"], ["\n  .spending-sort-container {\n    position: relative;\n    user-select: none;\n    height: 30px;\n    color: ", ";\n    \n\n    .label-sort {\n      left: 5px;\n      ", "\n    }\n\n    .category-sort {\n      left: 202px;\n      ", "\n\n    }\n\n    .amount-sort {\n      right: 10px;\n      ", "\n\n    }\n  }\n"])), colors_1.default.grey3, common, common, common);
exports.default = StyledSpendingSort;
var templateObject_1, templateObject_2;
