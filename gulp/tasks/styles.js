var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var onError = require('./error-handler');

var buildStylesTask = function() {
  gulp
    .src('src/styles/main.less')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(less())
    .pipe(gulp.dest('build/assets/styles'));
};

gulp.task('build-styles', buildStylesTask);

exports.buildStylesTask = buildStylesTask;
