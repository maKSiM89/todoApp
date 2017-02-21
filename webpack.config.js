var modules = require('./modules.config');

module.exports = {
	entry: "./app/index.js",

	output: {
		filename: "public/bundle.js"
	},

	devtool: "cheap-module-inline-source-map",

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: getExcludedModules(),
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

function getExcludedModules() {
	const inActiveModules = modules.filter((module) => (module.active));
	console.log( inActiveModules );
	// get coorect path to modules
	return [/(node_modules)/];
}