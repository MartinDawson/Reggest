const Webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dotenv = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

dotenv.config();

const isInProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: ({ resource }) => /node_modules/.test(resource),
  }),
  new ExtractTextPlugin({
    filename: '[name].bundle.css',
  }),
  new Webpack.DefinePlugin({
    __DEV__: !isInProduction,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new HTMLPlugin({
    title: 'reggest',
    hash: true,
    favicon: path.resolve(__dirname, 'wwwroot/favicon.ico'),
    template: path.resolve(__dirname, 'Components/app/app.ejs'),
    env: process.env.NODE_ENV,
  }),
];
let devtool = false;

const entry = {
  app: './Components/app/appContainer.js',
};

if (isInProduction) {
  plugins.push(
    new UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  );
} else {
  devtool = 'inline-sourcemap';
}

module.exports = {
  context: __dirname,
  devtool,
  entry,
  output: {
    path: path.resolve(__dirname, 'wwwroot/build/'),
    publicPath: '/build/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'Components'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          }, {
            loader: 'less-loader',
          }],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
    ],
  },
};
