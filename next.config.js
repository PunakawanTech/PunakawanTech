const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withPurgeCss = require('next-purgecss');

module.exports = withCss(
    withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
        },
        assetPrefix: '',
    })
);
