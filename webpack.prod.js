const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    index: './src/production.jsx',
    // vendor: ['react'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'node_modules/react-stylish-gallery/dist/',
    // publicPath: 'https://fonts.googleapis.com/icon?family=Material+Icons/maps/svg/production/',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.bundle.js',
    // }),
  ]
})
