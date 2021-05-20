"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalContext_1 = __importDefault(require("@src/globalContext"));
var react_1 = require("react");
var Stats = function () {
    var setContext = react_1.useContext(globalContext_1.default).setContext;
    react_1.useEffect(function () {
        setContext({ displayDatePicker: false });
    }, []);
    return (<div>stats</div>);
};
exports.default = Stats;
