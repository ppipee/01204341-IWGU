const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
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
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            'react-hot-loader/babel',
                            '@babel/plugin-proposal-class-properties',
<<<<<<< HEAD
=======
                            ["import", { "libraryName": "antd", "style": "true" }],
>>>>>>> f929bebab43c8f8b3aaf170c5031bdf07571af58
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                exclude: /(node_modules)/,
                use: [{ loader: 'file-loader' }],
            },
            {
                test: /\.less$/,
                use: ["style-loader", { loader: 'css-loader', options: { sourceMap: 1 } }, "postcss-loader", "less-loader"]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    stats: { children: false },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
}
