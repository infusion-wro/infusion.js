const path = require('path')

module.exports = {
  context: __dirname,
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), './src/App.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
