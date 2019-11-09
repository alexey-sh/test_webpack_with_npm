const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'sources', 'main.js'),
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
                include: path.join(__dirname, 'sources'),
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        chrome: '40',
                                        firefox: '52',
                                        ie: '11',
                                        safari: '9'
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};
