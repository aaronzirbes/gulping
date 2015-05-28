var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var buildStylesTask = function() {

  var onError = function(err) {
    gutil.beep();     // growl notification
    gutil.log(err);   // show me
    this.emit('end'); // do no more stuff since it will break anyway
  }

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
