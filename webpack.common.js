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
    publicPath: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
  },
  // Plugins
  plugins: [
    new CleanWebpackPlugin(['dist', 'images', 'index.html', 'index.bundle.js']),
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/',
          'image-webpack-loader'
        ]
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/',
          'image-webpack-loader'
        ]
      },
      // Url loader
      {
        // test: /\.(:?jpg|jpeg|png|gif|svg|woff|woff2|eot|ttf|otf)$/,
        // loader: 'url-loader',
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
