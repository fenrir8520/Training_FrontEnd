const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// ディレクトリ構造を保ったままdistする
let srcPath = path.resolve(__dirname, 'src');
let targetFiles = glob.sync(`${srcPath}/**/main.js`);

let entryFiles = {};
targetFiles.forEach(item => {
    let key = item.replace(`${srcPath}/`, '');
    entryFiles[key] = item;
});

const targetHtmlFiles = glob.sync(`${srcPath}/*/index.html`);
const copyTarget = targetHtmlFiles.map(item => {
    return {
        from: item,
        to: item.replace(srcPath, '.')
    };
});

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: entryFiles,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'public/')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.vue', '.scss'],
        // modules: [path.resolve(__dirname, 'src/')]
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        open: true
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                toType: 'template',
                to: '[name].[ext]'
            },
            {
                from: 'src/images/',
                toType: 'dir',
                to: 'images/'
            }
        ].concat(copyTarget))
    ]
};
