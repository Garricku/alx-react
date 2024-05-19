const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
	    new CleanWebpackPlugin(),
    ],
    entry: {
	    header: './src/header.js',
            body: './src/body.js',
            footer: './src/footer.js',
    }
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            },
        ],
    },
};
