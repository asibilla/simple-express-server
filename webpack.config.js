'use strict';

const dotenv = require('dotenv-webpack');
const path = require('path');

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
    ]
  };
};
