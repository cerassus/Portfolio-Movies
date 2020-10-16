const path = require("path");
const entryFile = "index.js";

module.exports = {
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `public/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  }
};
