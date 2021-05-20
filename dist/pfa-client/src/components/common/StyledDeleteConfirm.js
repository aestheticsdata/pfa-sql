"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var colors_1 = __importDefault(require("@src/colors"));
var confirmDeletePopin = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .confirm-delete-popin {\n    position: absolute;\n    width: 100%;\n    padding: 4px 0 4px 6px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    background-color: ", ";\n    top: 0;\n    right: 0;\n    color: ", ";\n  \n  .title {\n      display: inline-block;\n      text-align: center;\n      width: 56%;\n      font-size: 14px;\n      user-select: none;\n    }\n  \n  .button-container {\n      float: right;\n      padding-left: 2px;\n  \n    .cancel-button {\n        cursor: pointer;\n      }\n  \n    .confirm-button {\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  .confirm-delete-popin {\n    position: absolute;\n    width: 100%;\n    padding: 4px 0 4px 6px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    background-color: ", ";\n    top: 0;\n    right: 0;\n    color: ", ";\n  \n  .title {\n      display: inline-block;\n      text-align: center;\n      width: 56%;\n      font-size: 14px;\n      user-select: none;\n    }\n  \n  .button-container {\n      float: right;\n      padding-left: 2px;\n  \n    .cancel-button {\n        cursor: pointer;\n      }\n  \n    .confirm-button {\n        cursor: pointer;\n      }\n    }\n  }\n"])), colors_1.default.warningDelete, colors_1.default.warningDeleteBackground, colors_1.default.warningDelete);
exports.default = confirmDeletePopin;
var templateObject_1;
