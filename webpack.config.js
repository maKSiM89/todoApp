module.exports = {
	entry: "./app/app.js",

	output: {
		filename: "public/bundle.js"
	},

	devtool: "cheap-module-source-map",

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
                test: /\.(s)css$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
		]
	}
};