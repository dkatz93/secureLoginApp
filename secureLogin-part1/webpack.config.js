'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIR = path.join(__dirname, 'src/client/jsx');
const BUILD_DIR = path.join(__dirname, 'src/client/assets/javascript');

const config = {
  entry: [
      APP_DIR + '/index.jsx'
    ],
  output: 
    {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module : {
    loaders : [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../stylesheets/style.css', {
      allChunks: true
    })
  ]
};

module.exports = config;
