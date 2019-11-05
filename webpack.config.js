const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
require('dotenv').config()

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            [
                                '@babel/preset-env',
                                { targets: { node: 'current' } },
                            ],
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-proposal-export-namespace-from',
                            '@babel/plugin-proposal-throw-expressions',
                            ['import', { libraryName: 'antd', style: 'true' }],
                            'transform-es2015-modules-commonjs',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /(node_modules)/,
                use: [{ loader: 'file-loader' }],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: 1 } },
                    'postcss-loader',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.MAP_KEY': JSON.stringify(process.env.MAP_KEY),
        }),
    ],
    stats: { children: false },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    node: {
        fs: 'empty',
    },
}
