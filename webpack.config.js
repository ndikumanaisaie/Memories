/* eslint-disable no-underscore-dangle */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default
{
	mode: 'development',
	name: 'client',
	entry: {
		main: './src/client/index.js',
	},
	experiments: {
		outputModule: true,
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		scriptType: 'text/javascript',
		chunkFilename: '[id].[chunkhash].js',
	},
	devtool: 'source-map',
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
			{
				// Loads the javacript into html template provided.
				// Entry point is set below in HtmlWebPackPlugin in Plugins
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						// options: { minimize: true }
					},
				],
			},
		],
	},
	devServer: {
		port: 5000,
		open: true,
		static: './dist',
		historyApiFallback: true,
		hot: true,
		proxy: {
			'/posts': 'http://localhost:8080',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
			filename: './index.html',
			excludeChunks: ['server'],
		}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	],
	optimization: {
		runtimeChunk: 'single',
	},
};