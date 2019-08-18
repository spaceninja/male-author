const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];
  return (
    addons
      .filter(Boolean)
      // eslint-disable-next-line global-require
      .map(name => require(`./addons/webpack.${name}.js`))
  );
};

module.exports = ({ env, addon }) => {
  return webpackMerge(commonConfig, { mode: env }, ...getAddons(addon));
};
