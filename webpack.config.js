const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginVendor = new ExtractTextPlugin('./css/vendor.css');
const ExtractTextPluginStyles = new ExtractTextPlugin('./css/styles.css');

module.exports = {
    entry: [
        './app/index.js'
    ],

    output: {
        path: __dirname + '/build',
        filename: 'js/app.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader']
            }, {
                test: /^((?!.min).)*\.css$/,
                loader: ExtractTextPluginStyles.extract({
                	use: [{
                	    loader: 'css-loader'
                    }, {
                	    loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }]
                })
            }, {
                test: /\.scss$/,
                loader: ExtractTextPluginStyles.extract({
                	use: [{
                	    loader: 'css-loader'
                    }, {
                	    loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },{
                	    loader: 'sass-loader'
                    }]
                })
            }, {
                test: /\.min.css$/,
                loader: ExtractTextPluginVendor.extract({
                	use: [{
                	    loader: 'css-loader'
                    }]
                })
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        ExtractTextPluginVendor,
        ExtractTextPluginStyles,
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            inject: 'body'
        })
    ]
};