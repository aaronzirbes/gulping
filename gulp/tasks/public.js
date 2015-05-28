var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var buildPublicTask = function() {

  gulp.src('public/**/*.*')
      .pipe(gulp.dest('build'));

};

gulp.task('build-public', buildPublicTask);

exports.buildPublicTask = buildPublicTask;
