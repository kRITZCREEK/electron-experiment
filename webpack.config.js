module.exports = {
    context: __dirname + "/app",
        entry: {
            app : "./app",
            searchBar: "./popup"
        },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ],
        resolve: {
            extensions: ['', 'js', 'styl']
        }
    },
    target: 'atom'
};