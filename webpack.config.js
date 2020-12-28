const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, "./dist"),
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
}