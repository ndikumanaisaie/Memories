const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
	{
		mode: 'development',
		name: 'client',
		entry: './src/client/index.js',
		output: {
			filename: '[name].js',
			path: `${__dirname}/dist/client`,
			chunkFilename: '[id].[chunkhash].js',
		},
		target: 'web',
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(jsx|js)$/,
					include: path.resolve(__dirname, 'src'),
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									targets: 'defaults',
								}],
								'@babel/preset-react',
							],
							plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-private-property-in-object', '@babel/plugin-proposal-private-methods'],
						},
					}],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},
		devServer: {
			static: './dist',
			historyApiFallback: true,
			hot: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/client/index.html',
				excludeChunks: './src/server/index.js',
			}),
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),
		],
		optimization: {
			runtimeChunk: 'single',
		},
	},

	{
		mode: 'development',
		name: 'server',
		entry: {
			server: './src/server/index.js',
		},
		output: {
			path: `${__dirname}/dist/server`,
			filename: '[name].js',
		},
		target: 'node',
		node: {
			// Need this when working with express, otherwise the build fails
			__dirname: false, // if you don't put this is, __dirname
			__filename: false, // and __filename return blank or /
		},
		externals: [nodeExternals()], // Need this to avoid error when working with Express
		module: {
			rules: [
				{
					// Transpiles ES6-8 into ES5
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
			],
		},
	},
];