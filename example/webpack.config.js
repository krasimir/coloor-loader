var webpack = require('webpack');

module.exports = {
  entry: './src/page.html',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
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