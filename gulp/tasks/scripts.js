var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var onError = require('./error-handler');

var buildScriptsTask = function() {
  var vendorDir = 'bower_components';

  var options = {
    debug: true,
    paths: [vendorDir]
  };

  browserify('src/scripts/main.js', options)
    .bundle()
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build/assets/scripts'));

};

var checkScriptsTask = function() {
  gulp.src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(eslint())
    .pipe(eslint.format());
};

gulp.task('build-scripts', ['check-scripts'], buildScriptsTask);
exports.buildScriptsTask = buildScriptsTask;

gulp.task('check-scripts', checkScriptsTask);
exports.checkScriptsTask = checkScriptsTask;
