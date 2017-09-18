const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // Entry
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],
  // Output
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
  },
  // Plugins
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
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
          'file-loader?name=[name].[ext]'
        ]
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // Url loader
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'url-loader',
        // options: {
        //   limit: 25000,
        // },
      },
    ]
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".json" ]
  },
}
