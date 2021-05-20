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
var css_sizes_1 = __importDefault(require("@src/css-sizes"));
var StyledSpendings = macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  top: ", "px;\n  padding-top: 10px;\n\n  .list-container {\n    display: flex;\n    justify-content: center;\n  \n    .spendings-container {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      height: auto;\n      overflow: auto;\n      width: 1515px;\n      margin-top: 20px;\n      \n      @media(max-width: 1524px) {\n        width: 1010px;\n      }\n      \n      @media(max-width: 1024px) {\n        width: 500px;\n      }\n    }\n  }\n"], ["\n  position: relative;\n  top: ", "px;\n  padding-top: 10px;\n\n  .list-container {\n    display: flex;\n    justify-content: center;\n  \n    .spendings-container {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      height: auto;\n      overflow: auto;\n      width: 1515px;\n      margin-top: 20px;\n      \n      @media(max-width: 1524px) {\n        width: 1010px;\n      }\n      \n      @media(max-width: 1024px) {\n        width: 500px;\n      }\n    }\n  }\n"])), css_sizes_1.default.navbarHeight + css_sizes_1.default.dashboardHeight);
exports.default = StyledSpendings;
var templateObject_1;
