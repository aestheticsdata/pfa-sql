"use strict";
// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
Object.defineProperty(exports, "__esModule", { value: true });
var adjustFontColor = function (bgColor) {
    var c = bgColor.substring(1);
    var rgb = parseInt(c, 16);
    var _a = [((rgb >> 16) & 0xff), ((rgb >> 8) & 0xff), ((rgb >> 0) & 0xff)], r = _a[0], g = _a[1], b = _a[2];
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 140 ? '#ffffff' : '#111111';
};
exports.default = adjustFontColor;
