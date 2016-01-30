var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: [
        // The enyo library is built separately and copied (see module.loaders
        // below)
        '../enyo/build/enyo.css',
        '../enyo/build/enyo.js',
        // index.html is also copied
        './index.html',
        // index.js is our entry point
        './index.ts',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                exclude: /enyo\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]',
                ],
            },
            {
                include: [
                    path.resolve('./enyo/build'),
                    path.resolve('./app/index.html'),
                ],
                loader: "file-loader?name=[name].[ext]"
            },
        ]
    },
};
