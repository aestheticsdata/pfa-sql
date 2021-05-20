"use strict";
var _a = require("customize-cra"), override = _a.override, addWebpackAlias = _a.addWebpackAlias;
var path = require('path');
module.exports = override(addWebpackAlias({
    '@src': path.resolve(__dirname, './src/'),
    '@helpers': path.resolve(__dirname, './src/helpers'),
    '@components': path.resolve(__dirname, './src/components/'),
}));
