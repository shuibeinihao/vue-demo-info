var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [path.join(__dirname, '../src/main')]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath:'',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'router': path.resolve(__dirname, '../src/router'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'services': path.resolve(__dirname, '../src/services'),
    }
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
          test: /\.vue$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'vue-loader'
      },
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
      },
      {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'url-loader',
          query: {
              limit: 10000,
              name: path.join('static', 'images/[name].[hash:7].[ext]')
          }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
    })
  ]
}
