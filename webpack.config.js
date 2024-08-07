const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: false,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },

  optimization: {
    splitChunks: false,
  },
  experiments: {
    topLevelAwait: true,
  },
  entry: {
    ui: './src/index.tsx',
    code: './src/code/code.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(glb|gltf)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/ui.html',
      filename: 'ui.html',
      chunks: ['ui'],
      inject: 'body',
    }),
    new HtmlInlineScriptPlugin({
      scriptMatchPattern: [/ui\.js$/],
      htmlMatchPattern: [/ui\.html$/],
    }),
  ],
};