// Webpack configuration

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const config = {
  // define the exact path for the entry file
  entry: path.resolve("src/index.js"),

  // Define the path to the bundle file
  output: {
    path: path.resolve("dist"),
    filename: "js/bundle.js"
  },

  // Add the modules that i need
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "dist"
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"]
          }
        }
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      }
    ]
  },

  // Add the Devserver
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin("css/style.css"),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/index.pug",
      inject: true
    }),
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};

// export the this webpack config file
module.exports = config;
