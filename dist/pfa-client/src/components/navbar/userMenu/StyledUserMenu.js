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
var StyledUserMenu = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  background-color: transparent;\n  right: 100px;\n  top: 20px;\n  width: 150px;\n  height: 60px;\n  cursor: pointer;\n\n  .email {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 130px;\n    float: right;  \n  }\n"], ["\n  position: absolute;\n  background-color: transparent;\n  right: 100px;\n  top: 20px;\n  width: 150px;\n  height: 60px;\n  cursor: pointer;\n\n  .email {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 130px;\n    float: right;  \n  }\n"])));
exports.default = StyledUserMenu;
var templateObject_1;
