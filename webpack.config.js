var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry:  ["@babel/polyfill",'./app/index.js'],
    output:  {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-regenerator', '@babel/plugin-proposal-class-properties']
                  }
                }
              },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    mode: 'development'
    
}