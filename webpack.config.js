const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = env => ({
  resolve: {
    extensions: [`.ts`, `.js`]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: env.NODE_ENV === `production`
        }
      },
      {
        test: /\.ts$/,
        loader: `ts-loader`,
        options: {
          configFile: env.NODE_ENV
            ? `tsconfig.${env.NODE_ENV}.json`
            : `tsconfig.json`
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: `./src/index.html` })]
});
