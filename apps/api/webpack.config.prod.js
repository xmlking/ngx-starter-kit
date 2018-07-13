// FIXME : work-in-progress
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  context: __dirname + "/src",
  entry: ['./main.ts'],
  target: 'node',
  output: {
    path: path.join(__dirname, '../../dist/apps/api'),
    filename: 'server.js',
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ],
  mode: "production",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  externals: nodeModules
};
