"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locales = exports.getLang = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
var fr_1 = __importDefault(require("date-fns/locale/fr"));
var en_US_1 = __importDefault(require("date-fns/locale/en-US"));
var getLang = function () {
    var _a;
    return (_a = js_cookie_1.default.get('lang')) !== null && _a !== void 0 ? _a : 'en';
};
exports.getLang = getLang;
exports.locales = {
    'fr': {
        fr: fr_1.default,
        formatString: 'dd MMM yyyy',
    },
    'en': {
        en: en_US_1.default,
        formatString: 'MMM do y',
    },
};
