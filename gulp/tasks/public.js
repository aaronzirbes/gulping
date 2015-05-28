var gulp = require('gulp');
var plumber = require('gulp-plumber');
var onError = require('./error-handler');

var buildPublicTask = function() {

  gulp.src('public/**/*.*')
    .pipe(plumber({
      errorHandler: onError
    }))
      .pipe(gulp.dest('build'));

};

gulp.task('build-public', buildPublicTask);

exports.buildPublicTask = buildPublicTask;
