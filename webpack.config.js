var path = require("path");

module.exports = {
  mode: "production",
  entry: "./Canvas.js",
  output: {
    path: path.resolve("lib"),
    filename: "DoodleCanvas.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
