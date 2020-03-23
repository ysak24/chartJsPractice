const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    // mode: "production",
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: "dist",
        open: true
    }
};