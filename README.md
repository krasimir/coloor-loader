# coloor-loader

[Webpack](https://webpack.github.io/) loader for [Coloor](https://github.com/krasimir/coloor) image preloading utility.

## Usage

Install the loader with `npm i coloor-loader -D` and then add it to your `webpack.config.js` file:

```js
var webpack = require('webpack');

module.exports = {
  entry: '...',
  devtool: 'source-map',
  output: {
    path: '...',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'cssx-loader',
        exclude: /node_modules/
      }
    ]
  }
};

```