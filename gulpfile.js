var gulp = require('gulp');
var requiredir = require('require-dir');
var del = require('del');

requiredir('gulp/tasks');

gulp.task('build', 
  [
    'build-public',
    'build-scripts',
    'build-styles',
  ]
);

gulp.task('clean', function() {
  del('build');
});
