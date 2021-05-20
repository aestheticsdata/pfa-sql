"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputMixin = exports.buttonMixin = void 0;
var styled_components_1 = require("styled-components");
var colors_1 = __importDefault(require("@src/colors"));
var buttonMixin = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: inherit;\n  text-transform: uppercase;\n  background: transparent;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  \n  &:hover:enabled {\n    box-shadow: 0 1px 10px 1px rgba(150, 150, 150, 0.6);\n    background-color: rgba(200, 200, 200, 0.1);\n    color: ", ";\n    border: 1px solid ", ";\n    transition: all .2s ease;\n  }\n"], ["\n  color: inherit;\n  text-transform: uppercase;\n  background: transparent;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  \n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  \n  &:hover:enabled {\n    box-shadow: 0 1px 10px 1px rgba(150, 150, 150, 0.6);\n    background-color: rgba(200, 200, 200, 0.1);\n    color: ", ";\n    border: 1px solid ", ";\n    transition: all .2s ease;\n  }\n"])), colors_1.default.formsGlobalColor, colors_1.default.formsGlobalColorHover, colors_1.default.formsGlobalColorHover);
exports.buttonMixin = buttonMixin;
var inputMixin = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // hack to remove in Chrome, input colors\n  // https://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs\n  // https://stackoverflow.com/questions/34551637/css-webkit-transition-not-working-on-input-type\n  // https://github.com/styled-components/styled-components/issues/492\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-transition-delay: 9999s;\n  }\n  // ////////////////////////////////////////\n  color: inherit;\n  font-size: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid ", ";\n  margin: 8px 0;\n  outline: none;\n  width: 100%;\n  padding-bottom: 10px;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ", ";\n    transition: all .2s ease;\n  }\n"], ["\n  // hack to remove in Chrome, input colors\n  // https://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs\n  // https://stackoverflow.com/questions/34551637/css-webkit-transition-not-working-on-input-type\n  // https://github.com/styled-components/styled-components/issues/492\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-transition-delay: 9999s;\n  }\n  // ////////////////////////////////////////\n  color: inherit;\n  font-size: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid ", ";\n  margin: 8px 0;\n  outline: none;\n  width: 100%;\n  padding-bottom: 10px;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ", ";\n    transition: all .2s ease;\n  }\n"])), colors_1.default.formsGlobalColor, colors_1.default.formsGlobalColor);
exports.inputMixin = inputMixin;
var templateObject_1, templateObject_2;
