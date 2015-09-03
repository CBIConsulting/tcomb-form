var webpack = require('webpack');

module.exports = {
	entry: "./index.js",
	output: {
		libraryTarget: "var",
		library: "TcombForm",
		path: "./dist",
		filename: "tcomb-form.min.js"
	},
	externals: {
		'react': 'React',
		'react/addons': 'React'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin()
	]
};