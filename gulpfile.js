const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const auto_prefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const glob = require('glob');


// SASSコンパイル
gulp.task('sass', () => {
    let targetFiles = glob.sync('./text/**/main.scss');
    console.log(targetFiles);

    gulp.src('./source/**/*.scss', {
        base: './source/'
    })
    .pipe(plumber())
    .pipe(sass(
        {outputStyle: 'compressed'}
    ))
    .pipe(auto_prefixer())
    .pipe(gulp.dest('./distribusion'));
});
// .scssファイル監視
gulp.task('sass-watch', ['sass', 'copy-img'], () => {
    gulp.watch('./source/**/*.scss', ['sass']);
});
// .js, .vueファイルトランスパイル
gulp.task('webpack', () => {
    gulp.src(['./source/**/*.vue', './source/**/*.js'])
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./distribusion'))
});
// .js, .vueファイル監視
gulp.task('script-watch', ['webpack', 'copy-img'], () => {
    gulp.watch(['./source/**/*.vue', './source/**/*.js'], ['webpack']);
});
// htmlコピー
gulp.task('html-copy', () => {
    gulp.src('./source/**/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('./distribusion'))
});
// .htmlファイル監視
gulp.task('html-watch', ['html-copy', 'copy-img'], () => {
    gulp.watch('./source/**/*.html', ['html-copy']);
});
// 画像コピー
gulp.task('copy-img', () => {
    gulp.src(['./source/**/*.jpg',
        './source/**/*.jpeg',
        './source/**/*.gif',
        './source/**/*.png'
    ], {
        base: './source/'
    })
    .pipe(plumber())
    .pipe(gulp.dest('./distribusion'))
});

gulp.task('build', ['sass', 'webpack', 'copy-img', 'html-copy']);

gulp.task('default', ['sass-watch', 'script-watch', 'html-watch']);
