const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  output: {
    filename: '[name].js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'swc-loader',
      },
    ],
  },
};
