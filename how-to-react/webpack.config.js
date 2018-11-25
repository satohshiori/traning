module.exports = {
    entry: {
        app: "./src/index.jsx"
    },
    output: {
        path: __dirname + '/public/js',
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        contentBase: __dirname + '/public',
        port: 8080,
        publicPath: '/js/'
    },
    mode: 'development'
};