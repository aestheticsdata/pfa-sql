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
var StyledInvoiceImageModal = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d2d2d2;\n  z-index: 1;\n\n  .image-container-fullsize {\n    position: absolute;\n    max-height: 100%;\n    overflow-y: auto;\n\n    img {\n      width: 100%;\n    }\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d2d2d2;\n  z-index: 1;\n\n  .image-container-fullsize {\n    position: absolute;\n    max-height: 100%;\n    overflow-y: auto;\n\n    img {\n      width: 100%;\n    }\n  }\n"])));
exports.default = StyledInvoiceImageModal;
var templateObject_1;
