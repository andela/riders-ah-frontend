import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

module.exports = {
  entry: path.join(__dirname, '../src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(jpg|jpeg|png|gif|mp3|mp4|svg)$/, loaders: ['file-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new Dotenv(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src', 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/videos', to: 'assets/videos' }
    ])
  ]
};
