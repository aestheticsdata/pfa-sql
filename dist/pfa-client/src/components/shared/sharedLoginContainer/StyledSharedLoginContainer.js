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
var css_sizes_1 = __importDefault(require("../../../css-sizes"));
var StyledSharedLoginContainer = macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);\n    top: 100px;\n    background: linear-gradient(-45deg, rgba(87, 156, 212) 0%, rgba(131,234,210,1) 99%);\n    margin: 0 auto;\n    width: ", "px;\n    padding: 10px;\n    border-radius: 5px;\n"], ["\n    position: relative;\n    box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);\n    top: 100px;\n    background: linear-gradient(-45deg, rgba(87, 156, 212) 0%, rgba(131,234,210,1) 99%);\n    margin: 0 auto;\n    width: ", "px;\n    padding: 10px;\n    border-radius: 5px;\n"])), css_sizes_1.default.loginFormsWidth);
exports.default = StyledSharedLoginContainer;
var templateObject_1;
