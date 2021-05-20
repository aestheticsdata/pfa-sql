"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLang = void 0;
var constants_1 = require("./constants");
var updateLang = function (lang) {
    return {
        type: constants_1.UPDATE_LANG,
        lang: lang,
    };
};
exports.updateLang = updateLang;
