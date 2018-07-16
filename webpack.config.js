'use strict';

const dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {

  return {
    mode: 'development',
    entry: [path.join(__dirname, 'client', 'index.js')],
    output: {
      filename: 'index_bundle.js',
      path: path.join(__dirname, 'dist')
    },
    target: 'node',
    module: {
      rules: [
        { test: /\.js$/, loader: "babel-loader" },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}]}
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new dotenv({
        path: path.join(__dirname, '.env')
      }),
      new HtmlWebpackPlugin({
        filename: "./index.html",
        template: path.join(__dirname, 'client', 'index.html')
      })
    ]
  };
};
