var webpack = require('webpack')

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [ new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};