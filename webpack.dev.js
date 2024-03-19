const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3002,
    hot: true,
    static:{
      directory: path.join(__dirname, 'dist')
    }, 
},
});