module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
    },
};
