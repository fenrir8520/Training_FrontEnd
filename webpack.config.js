const path = require('path');
const glob = require('glob');

// ディレクトリ構造を保ったままdistする
let srcPath = path.resolve(__dirname, 'source');
let targetFiles = glob.sync(`${srcPath}/**/main.js`);
console.log(targetFiles);

let entryFiles = {};
targetFiles.forEach(item => {
    let key = item.replace(`${srcPath}/`, '');
    entryFiles[key] = item;
});
console.log(entryFiles);
module.exports = {
    entry: entryFiles,
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'distribusion/')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
