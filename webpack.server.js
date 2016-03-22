const path = require('path')

module.exports = {
  entry: './server',
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
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.json/,
      loader: 'json'
    }]
  }
}
