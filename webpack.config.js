const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@components/*": path.resolve(__dirname, "./src/components/*"),
      "@styles/*": path.resolve(__dirname, "./src/styles/*"),
      "@assets/*": path.resolve(__dirname, "./src/assets/*"),
      "@queries/*": path.resolve(__dirname, "./src/queries/*"),
      "@tstypes/*": path.resolve(__dirname, "./types/*"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv()
  ]
};
