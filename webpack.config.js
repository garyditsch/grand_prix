const webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
    entry: './client/main.js',
    output: {
        filename: 'bundle.js',
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'window.jQuery': 'jquery',
    //     }),
    // ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
            { test: /\.html$/, loader: 'raw' },
        ],
    },
};
