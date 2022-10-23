const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    // mode: "development", 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx&$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    target: 'web',
    devServer: {
        port: '8000',
        static: ['./public'],
        // open: true,
        // hot: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js', '.jsx','.json', '.ts','.tsx']
    }
}
