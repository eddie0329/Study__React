const { useBabelRc, removeModuleScopePlugin, override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),
  removeModuleScopePlugin(),
  addWebpackAlias({ '@': path.resolve(__dirname) }),
);
