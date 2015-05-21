var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('build-public', function() {

  gulp.src('public/**/*.*')
      .pipe(gulp.dest('build'));

});
