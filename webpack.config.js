const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  resolve: {
    extensions: [`.ts`, `.js`]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: `ts-loader`
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: `./src/index.html` })]
};
