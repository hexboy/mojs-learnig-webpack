var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/assets/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	stats: {
		colors: true
	},
}