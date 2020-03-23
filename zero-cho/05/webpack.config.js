const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: path.resolve(__dirname, 'src/client.jsx')
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel'
          ]
        }
      }
    ]
  },

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }
};
