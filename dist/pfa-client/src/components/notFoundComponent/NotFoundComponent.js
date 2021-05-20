"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_intl_1 = require("react-intl");
var StyledNotFoundComponent_1 = __importDefault(require("./StyledNotFoundComponent"));
var messages_1 = __importDefault(require("./messages"));
var NotFoundComponent = function () {
    var intl = react_intl_1.useIntl();
    return (<StyledNotFoundComponent_1.default>
      <div className="notfound404">
        <div className="title">404</div>
        <div className="text">{intl.formatMessage(__assign({}, messages_1.default.text))}</div>
      </div>
      <div className="bank"/>
    </StyledNotFoundComponent_1.default>);
};
exports.default = NotFoundComponent;
