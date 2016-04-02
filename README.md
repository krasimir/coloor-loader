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
          images: [__dirname + '/photos'] // location of the images
        }
      }
    ]
  }
};

```

[Coloor](https://github.com/krasimir/coloor) is a HTML preprocessor so it makes only sense when we work with HTML and the output is HTML too. Webpack (in general) is dealing with JavaScript. So, having this in mind we can say that `coloor-loader` is useful if we work with React and want to decorate transform JSX. To do that we have to parse the `*.jsx* files before they reach Babel. This could e achieved by placing `coloor-loader` at the end of the `loaders` array.