const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

 module.exports = merge(common, {
   mode: 'production',
 });