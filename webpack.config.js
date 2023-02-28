const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    filename: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][contenthash][ext]'
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CONQUEST',
      template: path.join(__dirname, 'src', 'template.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
              removeCR: true,
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        type: 'asset/resource',
      },
    ]
  },
}
