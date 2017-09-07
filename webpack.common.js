const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // Entry
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  // Output
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Plugins
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [
      // Babel loader
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // Css loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // File loader
      // Images
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".json" ]
  },
}
