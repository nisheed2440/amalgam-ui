const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: path.resolve(__dirname, '..', 'src/vendors/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist/vendor'),
    filename: '[name].[contenthash:8].js',
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '',
      seed: {
        name: 'Amalgam UI Vendor',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Vendor Bundle',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'async',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module, _chunks, cacheGroupKey) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // Separate chunks for the following packages
            if (packageName.match(/(react|turbolinks|mobx)/gi)) {
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `${cacheGroupKey}~${packageName.replace('@', '')}`;
            }
            // put rest of the chunks in common file
            return 'vendor~common';
          },
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    compress: true,
    port: 3000,
  },
};
