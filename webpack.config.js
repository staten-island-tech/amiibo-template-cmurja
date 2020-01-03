  
const path = require("path");
module.exports = {
  entry: {
    app: "./src/bundle.js",
    display: "./src/amiibo-display.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js")
  },
  devServer: {
    contentBase: "./dist"
  },
  watchOptions: {
    ignored: ["node_modules"]
  },
  watch: true
};