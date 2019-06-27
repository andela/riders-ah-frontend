import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
module.exports = {
  entry: path.join(__dirname, "../src", "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      { test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, loaders: ["file-loader"] }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src", "index.html")
    })
  ]
};
