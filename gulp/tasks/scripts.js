var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('build-scripts', function() {

  var vendorDir = 'bower_components';

  var options = {
    debug: true,
    paths: [vendorDir]
  };

  browserify('src/scripts/main.js', options)
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build/assets/scripts'));

});
