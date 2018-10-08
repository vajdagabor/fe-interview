var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var COMPONENT_DIR = path.resolve(__dirname, 'src/client/app/components');
var STYLESHEET_DIR = path.resolve(__dirname, 'src/client/app/stylesheets');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: [
          COMPONENT_DIR,
          STYLESHEET_DIR
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = config;
