const getConfig = require(`./webpack.config`);

module.exports = env => ({
  ...getConfig(env),
  mode: `production`
});
