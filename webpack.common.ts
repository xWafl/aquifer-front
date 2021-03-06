const path = require("path");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                loader: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "request$": "xhr",
            '@': path.resolve(__dirname, './src'),
        },
        extensions: [ '.tsx', '.ts', '.js'],
    },
    plugins: [
        new FaviconsWebpackPlugin('./static/favicon-32x32.png'),
        new VueLoaderPlugin()
    ]
};
