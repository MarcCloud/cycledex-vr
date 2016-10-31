const w = require('webpack');
const {resolve} = require('path');

module.exports = {
    devtool: 'eval-sourcemap',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname + '/www'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new w.optimize.DedupePlugin(),
        new w.optimize.OccurenceOrderPlugin(),
        new w.NoErrorsPlugin()
    ],
    module: {
        loaders: [{ test: /\.js$/, loader: 'babel-loader', include: /app/ }]
    }
};
