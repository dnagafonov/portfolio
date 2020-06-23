const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };
    if(!isDev){
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    }
    return config;
}

const cssLoaders = extra => {
    let loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        },
      }, 'css-loader'
    ]
    if(extra)
        loaders.push(extra);
    return loaders;  
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: !isDev ? '[name].[chunkhash].js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    resolve: {
        extensions:['.js', '.json']
    },
    devtool: isDev ? 'source-map' : '',
    devServer: {
        port: 8080,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ca]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpeg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            { 
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}