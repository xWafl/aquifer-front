const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const path = require("path");

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'aquifer.bundle.dev.js'
    },
    mode: "development",
    watch: true,
});