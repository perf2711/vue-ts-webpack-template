const path = require('path');
const webpack = require('webpack');
const process = require('process');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const resolve = (p) => path.resolve(__dirname, p);

const config = {
    entry: './src/app.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: resolve('dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: '/dist',
        hot: true
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.tsx?$/, enforce: 'pre', use: 'tslint-loader' },
            { test: /\.(c|sa|sc)ss/, use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader', 
                'sass-loader']},
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        publicPath: 'images'
                    }
                }]},
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        publicPath: 'fonts'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (!devMode) {
    config.mode = 'production';

    config.plugins.push(new UglifyJsPlugin({
        test: /\.js$/i
    }));

    config.plugin.push(new MiniCssExtractPlugin({
        filename: '[name].css'
    }));

    delete config.devtool;
}

module.exports = config;
