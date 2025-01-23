const webpack = require('webpack')

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback,{
        zlib: require.resolve('browserify-zlib'), // Prevent Webpack from including a polyfill for 'zlib'
        crypto: require.resolve('crypto-browserify'), // Ignore crypto module
        fs: false,     // Ignore fs module
        path: require.resolve('path-browserify'),
        querystring:require.resolve('querystring-es3'),
        stream:require.resolve('stream-browserify'),
        http:require.resolve('stream-http'),
        net:false,
        assert : require.resolve('assert/'),
        // axios:require.resolve('axios'),
        process:require.resolve("process/browser"),
        vm:false,
        async_hooks:false,
        os:false,
        // express:require.resolve('express')
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process:"process/browser"
        })
    ])

  return config;
};

// // module.exports = {
// //   // other configuration settings
// //   resolve: {
// //     fallback: {
// //       "zlib": false, // Disable polyfill for 'zlib'
// //     },
// //   },
// // };