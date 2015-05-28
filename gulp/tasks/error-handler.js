var gutil = require('gulp-util');

module.exports = function(err) {
  gutil.beep();     // growl notification
  gutil.log(err);   // show me
  this.emit('end'); // do no more stuff since it will break anyway
};
