var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  debug: false,
  entry: [
    './src/index'
  ],
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html',
      hash: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      __LOG_LEVEL__: JSON.stringify(process.env.LOG_LEVEL || 'info'),
      __API_ROOT__: JSON.stringify(process.env.API_ROOT || 'http://api.example.com/')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};

module.exports = new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge(config);
