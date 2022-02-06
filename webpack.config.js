const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/env"],
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "webpack.bundle.js",
	},
	devServer: {
		static: path.join(__dirname, "public/"),
		proxy: {
			"/dist": "http://localhost:3000",
		},
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
