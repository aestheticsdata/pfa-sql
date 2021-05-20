"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
var constants_1 = require("./constants");
var changePassword = function (email, changedPassword) {
    return {
        type: constants_1.CHANGE_PASSWORD,
        email: email,
        changedPassword: changedPassword,
    };
};
exports.changePassword = changePassword;
