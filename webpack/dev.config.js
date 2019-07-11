import merge from 'webpack-merge';
import baseConfig from './base.config.js';
import path from 'path';

export default merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback: {
      disableDotRule: true
    },
    writeToDisk: true,
    port: process.env.PORT || 3002,
    historyApiFallback: {
      disableDotRule: true
    },
    port: 3002
  },

  module: {
    rules: []
  }
});
