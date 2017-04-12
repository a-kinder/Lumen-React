const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/resources/ts/Main.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {

        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ]
    },

    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env': {
    //       'NODE_ENV': JSON.stringify('production')
    //     }
    //   }),
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress:{
    //       warnings: false
    //     }
    //   })
    // ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {},
};