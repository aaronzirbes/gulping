var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('build-styles', function() {

  gulp.src('src/styles/main.less')
      .pipe(less())
      .pipe(gulp.dest('build/assets/styles'));
});
