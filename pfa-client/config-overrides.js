const { override, addWebpackAlias } = require("customize-cra");
const path = require('path');

module.exports = override(addWebpackAlias({
  '@src': path.resolve(__dirname, './src/'),
  '@helpers': path.resolve(__dirname, './src/helpers'),
  '@components': path.resolve(__dirname, './src/components/'),
}));
