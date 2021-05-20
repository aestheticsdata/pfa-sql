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
var StyledLogin = macro_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .pwd-forgot {\n    text-align: center;\n    margin: 5px 0;\n    &:hover {\n      color: rgb(251,255,2);\n      text-decoration: underline;\n    }\n  }\n"], ["\n  .pwd-forgot {\n    text-align: center;\n    margin: 5px 0;\n    &:hover {\n      color: rgb(251,255,2);\n      text-decoration: underline;\n    }\n  }\n"])));
exports.default = StyledLogin;
var templateObject_1;
