const webpack = require("webpack");
const path = require('path');

const common = {
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".es2015.js"],
    },
};

module.exports = common;
