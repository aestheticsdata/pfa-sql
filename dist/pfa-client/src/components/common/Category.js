"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var adjustFontColor_1 = __importDefault(require("@components/common/helpers/adjustFontColor"));
var getCategoryComponent = function (item) {
    return (<span className="category" style={{
            color: "" + adjustFontColor_1.default(item.categoryColor),
            backgroundColor: "" + item.categoryColor,
        }}>
      {item.category}
    </span>);
};
exports.default = getCategoryComponent;
