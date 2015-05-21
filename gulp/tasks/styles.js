var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

gulp.task('build-styles', function() {

  gulp
    .src('src/styles/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('build/assets/styles'));
});
