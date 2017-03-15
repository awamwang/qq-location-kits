var path = require('path')

module.exports = {
  entry: {
    app: './test/index.js'
  },
  output: {
    path: path.resolve(__dirname, './test'),
    filename: 'index-dist.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(__dirname, 'test.*.js'),
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'test.*.js'),
        exclude: /node_modules/
      }
    ]
  }
}
