var webpack = require('webpack');

module.exports = {
  entry: './src/component.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'coloor',
        exclude: /node_modules/,
        query: {
          images: [__dirname + '/photos']
        }
      }
    ]
  }
};