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
var colors_1 = __importDefault(require("../../../colors"));
var sharedFormsCSS_1 = require("../sharedCSS/sharedFormsCSS");
var StyledSharedLoginForm = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .container {\n    color: ", ";\n    \n    .title {\n      padding: 10px 0 30px 0;\n      font-size: 30px;\n      text-align: center;\n      font-weight: 100;\n    }\n    \n    input {\n      ", ";\n    }\n    \n    .password-container {\n      position: relative;\n  \n      .show-password {\n        position: absolute;\n        display: inline-block;\n        top: 10px;\n        right: 12px;\n        cursor: pointer;\n      }\n    }\n    \n    select {\n      margin: 16px 0 8px 0;\n      border-radius: 0;\n      border-bottom: 1px solid ", ";\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      outline: none;\n      color: inherit;\n      background: transparent;\n      padding-bottom: 10px;\n      width: 100%;\n      -webkit-appearance: none;\n    }\n    \n    .shared-login-submit-btn {\n      ", ";\n      \n      margin: 40px 0 20px 0;\n      font-size: 18px;\n      width: 100%;\n      height: 30px;\n      \n    }\n  }\n"], ["\n  .container {\n    color: ", ";\n    \n    .title {\n      padding: 10px 0 30px 0;\n      font-size: 30px;\n      text-align: center;\n      font-weight: 100;\n    }\n    \n    input {\n      ", ";\n    }\n    \n    .password-container {\n      position: relative;\n  \n      .show-password {\n        position: absolute;\n        display: inline-block;\n        top: 10px;\n        right: 12px;\n        cursor: pointer;\n      }\n    }\n    \n    select {\n      margin: 16px 0 8px 0;\n      border-radius: 0;\n      border-bottom: 1px solid ", ";\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      outline: none;\n      color: inherit;\n      background: transparent;\n      padding-bottom: 10px;\n      width: 100%;\n      -webkit-appearance: none;\n    }\n    \n    .shared-login-submit-btn {\n      ", ";\n      \n      margin: 40px 0 20px 0;\n      font-size: 18px;\n      width: 100%;\n      height: 30px;\n      \n    }\n  }\n"])), colors_1.default.formsGlobalColor, sharedFormsCSS_1.inputMixin, colors_1.default.formsGlobalColor, sharedFormsCSS_1.buttonMixin);
exports.default = StyledSharedLoginForm;
var templateObject_1;
