const webpack = require('webpack');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.cjs');

const config = merge(common, {
  mode: 'development',
  watch: true,
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd:{
        scripts: ['yarn start'],
        blocking: true,
        parallel: false
      }
    })
  ]
});

module.exports = config;
