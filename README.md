# coloor-loader

[Webpack](https://webpack.github.io/) loader for [Coloor](https://github.com/krasimir/coloor) image preloading utility.

## Usage

Install the loader with `npm i coloor-loader -D` and then add it to your `webpack.config.js` file:

```js
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

```

[Coloor](https://github.com/krasimir/coloor) is a HTML preprocessor so it makes only sense when we work with HTML. Webpack (in general) is dealing with 