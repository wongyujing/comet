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
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      buffer: require.resolve('buffer/'),
      tty: require.resolve('tty-browserify'),
      path: require.resolve('path-browserify'),
      console: require.resolve('console-browserify'),
      vm: require.resolve('vm-browserify'),
      util: require.resolve('util/'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
    },
  },
}