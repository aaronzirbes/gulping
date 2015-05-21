var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('dev',function() {
  watch(
    [ 'src/**/*.*', 'public/**/*.html' ],
    function() {
      gulp.start('build');
    });
});
