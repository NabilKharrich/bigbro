const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./webpack.config');

const test = path.resolve(__dirname, 'examples/test.js');
const template = path.resolve(__dirname, 'examples/index.html');

module.exports = merge(config, {
  mode: 'development',
  entry: {
    test,
  },
  stats: 'minimal',
  plugins: [new HtmlWebpackPlugin({ template })],
});
