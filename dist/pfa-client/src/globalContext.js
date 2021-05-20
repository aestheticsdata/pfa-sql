"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalContext = void 0;
var react_1 = require("react");
exports.globalContext = {
    displayDatePicker: true,
};
var GlobalContext = react_1.createContext();
exports.default = GlobalContext;
