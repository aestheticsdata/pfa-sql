"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
var constants_1 = require("./constants");
function resetPassword(email) {
    return {
        type: constants_1.RESET_PASSWORD,
        email: email,
    };
}
exports.resetPassword = resetPassword;
