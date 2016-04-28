/**
 * Script to bundle our application code.
 * How to use: Run in the command line "node bundle.js --folder present" or "node bundle.js --folder future" 
 */
var webpack = require('webpack'),
    argv = require('yargs').argv;

if (argv.folder === 'present') {
    webpack({
        entry: './present/app.js',
        output: {
            filename: './present/bundle.js'
        },
        module: {
            loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        }
    }, function () {

    });
} else if (argv.folder === 'future') {
    webpack({
        entry: './future/app.js',
        output: {
            filename: './future/bundle.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        },
        resolve: {
            extensions: ['', '.js']
        },
        debug: true
    }, function (err, stats) {
    });
} else {
    console.log('File do not exists');
}
