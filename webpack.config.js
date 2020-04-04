module.exports = {
    mode: "development",
    // mode: "production",
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
    },
    module: {
    },
    devServer: {
        contentBase: "dist",
        open: true
    }
};