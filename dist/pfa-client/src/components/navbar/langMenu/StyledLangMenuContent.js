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
var StyledContent_1 = __importDefault(require("@components/common/dropdown/StyledContent"));
var colors_1 = __importDefault(require("@src/colors"));
var StyledUserMenuContent = styled_components_1.default(StyledContent_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  top: 30px;\n  left: 0;\n  width: 60px;\n  background-color: ", ";\n  padding: 5px;\n  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);\n  \n  .dropdownitems {\n    padding: 5px;\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n    .icon {\n      margin: 0 10px 0 5px;\n    }\n    .check {\n      font-size: 10px;\n      margin-left: 5px;\n    }\n  }\n"], ["\n  top: 30px;\n  left: 0;\n  width: 60px;\n  background-color: ", ";\n  padding: 5px;\n  box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);\n  \n  .dropdownitems {\n    padding: 5px;\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n    .icon {\n      margin: 0 10px 0 5px;\n    }\n    .check {\n      font-size: 10px;\n      margin-left: 5px;\n    }\n  }\n"])), colors_1.default.grey2, colors_1.default.grey0, colors_1.default.blueNavy);
exports.default = StyledUserMenuContent;
var templateObject_1;
