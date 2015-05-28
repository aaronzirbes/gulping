var gulp = require('gulp');
var watch = require('gulp-watch');

var devTask = function() {
  gulp.start('build');
  watch([ 'src/**/*.*', 'public/**/*.html' ], function() {
      gulp.start('build');
    });
};

gulp.task('dev', devTask);

exports.devTask = devTask;
