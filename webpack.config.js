const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  // mode: 'production',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    open: true,
    port: 9000,
    historyApiFallback: true,
  },
};
