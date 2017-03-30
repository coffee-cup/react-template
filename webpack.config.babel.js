import WebpackNotifierPlugin from 'webpack-notifier';
import DashboardPlugin from 'webpack-dashboard/plugin';
import webpack from 'webpack';
import path from 'path';

require('es6-promise').polyfill();

const isProd = process.env.NODE_ENV === 'production';
console.log(
    isProd ? 'Building for Production ⚡️' : 'Building for Development 💃'
);

const config = {
    entry: ['./src/index.jsx'],
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'app.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: 'public',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.(jsx|js)$/,
                loader: 'eslint-loader',
                exclude: [/node_modules/, /server/]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: {
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: []
};

if (isProd) {
    // Only do this when building for production
    config.devServer = {};
    config.devtool = '';
    config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
} else {
    // Only do this in development
    config.devtool = 'inline-source-map';
    config.plugins = config.plugins.concat([
        new WebpackNotifierPlugin(),
        new DashboardPlugin()
    ]);
}

export default config;
