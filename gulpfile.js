var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concatCss = require('gulp-concat-css');
var purify = require('gulp-purifycss');

var cssPath = './css/*.css';
var htmlPath = 'index.html';
var jsPath = './js/*.js';
var destPath = './dist';


gulp.task('uncleaned-css', function () {
    return gulp.src(cssPath)
    	.pipe(concatCss('./uncleaned-css.css'))
        .pipe(gulp.dest(destPath));
});

gulp.task('cleaned-with-uncss', function () {
    return gulp.src(cssPath)
    	.pipe(concatCss('./uncss-cleaned-css.css'))
    	.pipe(uncss({ html: [htmlPath]}))
        .pipe(gulp.dest(destPath));
});

gulp.task('cleaned-with-purifycss', function () {
    return gulp.src(cssPath)
    	.pipe(concatCss('./purifycss-cleaned-css.css'))
    	.pipe(purify([jsPath, htmlPath]))
        .pipe(gulp.dest(destPath));
});

gulp.task('default',['uncleaned-css','cleaned-with-uncss','cleaned-with-purifycss']);