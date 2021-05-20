"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayPopup = void 0;
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var displayPopup = function (message) {
    sweetalert2_1.default.fire({
        title: message.title || '',
        text: message.text || '',
        type: 'success',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    });
};
exports.displayPopup = displayPopup;
