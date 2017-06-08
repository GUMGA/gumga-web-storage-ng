const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseName = "gumga-web-storage";

module.exports = {
    entry: path.join(__dirname, 'src', 'web-storage'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: baseName + '.js',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: baseName + ".css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  use: 'css-loader'
              })
            },
            {
              test: /\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/i,
              use: "file-loader?name=assets/[name].[ext]"
            }
        ]
    }
};
