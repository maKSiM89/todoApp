const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
	entry: {
		bundle: "./app/index.js",
		vendor: "./assets/css/vendor/index.js"
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public'),
		publicPath: ASSET_PATH
	},

	devtool: "cheap-module-inline-source-map",

	module: {
		loaders: [{
				test: /\.jsx?$/,
				exclude: getExcludedModules(),
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                	use: 'css-loader'
                })
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                	use: 'css-loader!sass-loader'
                })
            }
		]
	},

	plugins: [
		new ExtractTextPlugin('[name].css'),
		// This makes it possible for us to safely use env vars on our code
	    new webpack.DefinePlugin({
	      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
	    })
	]
};

function getExcludedModules() {
	return [/(node_modules)/];
}