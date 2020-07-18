const path = require('path');
const HtmlWbpackPlugin = require('html-webpack-plugin');

const is_prod = process.env.NODE_ENV;

module.exports = {
    mode: is_prod === 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hash].js',
    },
    plugins: [
        new HtmlWbpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
