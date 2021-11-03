const webpack = require('webpack');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.cjs');

const config = merge(common, {
  mode: 'development',
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  },
  snapshot: {
    managedPaths: [],
    immutablePaths: [],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd:{
        scripts: ['nodemon -w dist dist/bundle.cjs'],
        blocking: false,
        parallel: true
      }
    })
  ]
});

module.exports = config;
