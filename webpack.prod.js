const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    chunkFilename: '[name].[contentHash].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: './redirect',
        to: path.resolve('dist'),
        test: /redirects$/,
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [
          MiniCssExtractPlugin.loader, // extracts CSS into separate files instead of style tag in the head
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader, // extracts CSS into separate files instead of style tag in the head
          'css-loader', // translates CSS into CommonJS
        ],
      },
    ],
  },
});
