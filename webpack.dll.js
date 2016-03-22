const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    dll: [
      'ansi-html',
      'ansi-regex',
      'global',
      'html-entities',
      'lodash',
      'radium',
      'react-deep-force-update',
      'react-dom',
      'react-proxy',
      'react-transform-catch-errors',
      'react-transform-hmr',
      'react',
      'redbox-react',
      'strip-ansi',
      'webpack-hot-middleware'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', 'dll-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}
