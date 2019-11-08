const path = require('path');

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'asdLib', // public library name
        libraryTarget: 'umd',
        globalObject: 'this' // To make UMD build available on both browsers and Node.js
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
