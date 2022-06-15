const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const lib = path.resolve(__dirname, 'src/index.js');

module.exports = merge(config, {
  mode: 'production',
  entry: {
    paperplease: lib,
  },
  output: {
    library: {
      name: 'paperplease',
      type: 'umd',
    },
  },
});
