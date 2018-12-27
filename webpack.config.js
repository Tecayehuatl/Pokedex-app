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
            },
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg)$/, 
                use: 'url-loader?limit=25000' 
            },
            { 
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                use: 'url-loader?limit=25000' 
}
        ]
    },
    devServer: {
        //avoid the Head socket issue
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            //filename: "./index.html"
        })
    ]
}