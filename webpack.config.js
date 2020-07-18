const path = require('path');

module.exports = {
    entry: './src/frodo.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hashname].js',
    },
};
