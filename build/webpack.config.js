const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathResolve = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: 'development',
  context: process.cwd(),
  entry: pathResolve('../index.ts'),
  devServer: {
    contentBase: pathResolve('../dist'),
    port: 8080,
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('../test/index.html'),
      inject: 'head',
    })
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
}