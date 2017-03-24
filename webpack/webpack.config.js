import 'dotenv/config';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=//localhost:7999/__webpack_hmr&reload=true',
    path.join(__dirname, '../app/entry.js'),
  ],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
     defaultAttribute: 'defer',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.md$/,
        use: [{
          loader: 'raw-loader',
        }],
      }, {
        test: /\.json?$/,
        loader: 'json-loader',
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      }, {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
};
