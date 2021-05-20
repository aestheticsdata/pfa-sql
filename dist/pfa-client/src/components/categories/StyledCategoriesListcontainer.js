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
var css_sizes_1 = __importDefault(require("@src/css-sizes"));
var StyledCategoriesListContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .categories-list-container {\n    position: relative;\n    top: ", "px;\n    left: 10px;\n    padding-top: 10px;\n  }\n"], ["\n  .categories-list-container {\n    position: relative;\n    top: ", "px;\n    left: 10px;\n    padding-top: 10px;\n  }\n"])), css_sizes_1.default.navbarHeight);
exports.default = StyledCategoriesListContainer;
var templateObject_1;
