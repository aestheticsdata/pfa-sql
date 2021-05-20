"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutSuccess = exports.logout = void 0;
var constants_1 = require("./constants");
function logout() {
    return {
        type: constants_1.LOG_OUT,
    };
}
exports.logout = logout;
function logoutSuccess() {
    return {
        type: constants_1.LOG_OUT_SUCCESS,
    };
}
exports.logoutSuccess = logoutSuccess;
