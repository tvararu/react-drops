const path = require('path')

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z0-9-]/,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel']
    }]
  }
}
