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
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var stripes = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: repeating-linear-gradient(\n    135deg,\n    white,\n    white 10px,\n    #eee 10px,\n    #eee 11px\n  );\n"], ["\n  background: repeating-linear-gradient(\n    135deg,\n    white,\n    white 10px,\n    #eee 10px,\n    #eee 11px\n  );\n"])));
var StyledCategoryBar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  ", "\n  .bar {\n    height: 100%;\n    span {\n      line-height: 1.7;\n      padding-left: 2px;\n    }\n  }\n"], ["\n  background-color: ", ";\n  ", "\n  .bar {\n    height: 100%;\n    span {\n      line-height: 1.7;\n      padding-left: 2px;\n    }\n  }\n"])), function (props) { return props.bgcolor || '#fff'; }, function (props) { return props.bgcolor === null && stripes; });
exports.default = StyledCategoryBar;
var templateObject_1, templateObject_2;
