const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const lib = path.resolve(__dirname, 'src/index.js');

module.exports = merge(config, {
  mode: 'production',
  entry: {
    bigbro: lib,
  },
  output: {
    library: {
      name: 'bigbro',
      type: 'umd',
    },
  },
});
