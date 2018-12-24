const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    //use to transpile ES6 to ES5
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        disableHostCheck: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            //filename: "./index.html"
        })
    ]
}