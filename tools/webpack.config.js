var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'deeppurple-amber': './apps/default/src/styles/themes/deeppurple-amber.scss',
    'indigo-pink': './apps/default/src/styles/themes/indigo-pink.scss',
    'pink-bluegrey': './apps/default/src/styles/themes/pink-bluegrey.scss',
    'purple-green': './apps/default/src/styles/themes/purple-green.scss'
  },
  output: {
    path: path.join(__dirname, '../apps/default/src/assets/themes'),
    filename: '[name].css'
  },
  module: {
    loaders: [
      {test: /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
};
