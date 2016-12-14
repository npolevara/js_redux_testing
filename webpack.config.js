var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
},
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    preloaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
        path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
        loaders: ['react-hot','babel-loader'],
        include: [
        path.resolve(__dirname,"src"),
        ],
        test: /\.js$/,
        plugin: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [autoprefixer, precss];
  }
}