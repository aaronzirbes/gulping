var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var buildScriptsTask = function() {

  var vendorDir = 'bower_components';

  var options = {
    debug: true,
    paths: [vendorDir]
  };

  var onError = function(err) {
    gutil.beep();     // growl notification
    gutil.log(err);   // show me
    this.emit('end'); // do no more stuff since it will break anyway
  }

  browserify('src/scripts/main.js', options)
    .bundle()
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build/assets/scripts'));

};

gulp.task('build-scripts', buildScriptsTask);

exports.buildScriptsTask = buildScriptsTask;
