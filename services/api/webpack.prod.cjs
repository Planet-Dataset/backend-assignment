const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.cjs');

const config = merge(common, {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false, // Note `mangle.properties` is `false` by default.
          keep_classnames: true,
          keep_fnames: false,
        },
      }),
    ],
  }
});

module.exports = config;
