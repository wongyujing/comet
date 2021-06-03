const path = require('path');

const pathResolve = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: 'development',
  entry: pathResolve('../index.ts'),
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
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
}