const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '~': path.join(path.resolve(__dirname, './src')),
            '@abstracts': path.join(path.resolve(__dirname, './src/assets/scss/abstracts')),
            '@utils': path.join(path.resolve(__dirname, './src/assets/scss/utils')),
        }
    },
    plugins: [
        {
            plugin: require('craco-plugin-scoped-css'),
        },
    ],
}