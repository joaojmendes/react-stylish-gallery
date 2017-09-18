const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')


module.exports = merge(common, {
  // Dev Tools
  devtool: 'inline-source-map',
  // Dev server config
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    // enable HMR on the server
  },
  // HMR plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
