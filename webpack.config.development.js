const getConfig = require(`./webpack.config`);

module.exports = env => ({
  ...getConfig(env),
  mode: `development`,
  devtool: `cheap-module-eval-source-map`
});
