'use strict';

const dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = () => {

  return {
    mode: 'development',
    entry: [path.join(__dirname, 'server', 'server.js')],
    output: {
      filename: 'server.js',
      path: path.join(__dirname, './dist')
    },
    target: 'node',
    module: {
      rules: [
        { test: /\.js?$/, loader: "babel-loader" }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new dotenv({
        path: path.join(__dirname, '.env')
      })
    ]
  };
};