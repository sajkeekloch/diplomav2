const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { main: './src/scripts/index.js', 
            about: './src/scripts/about.js',
            analytics: './src/scripts/analytics.js'
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            { // тут описываются правила
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/ // исключает папку node_modules
            },
            {
                test: /\.(woff|woff2|ttf|otf|png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        }
                    }
                ]
            },
        {
            test: /\.css$/, // применять это правило только к CSS-файлам
            use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 'css-loader', 'postcss-loader'] // к этим файлам нужно применить пакеты, которые мы уже установили
        }
        ]
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, "./src/images")
        }
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['main'],
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['about'],
            template: './src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['analytics'],
            template: './src/analytics.html',
            filename: 'analytics.html'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
