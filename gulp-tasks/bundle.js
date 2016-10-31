let gulp = require('gulp');
let gutil = require('gulp-util');

let exec = require('child_process').exec;

gulp.task('bundle', () => {
  return exec('node bundlefile.js', (error, stdout, stderr) => {
    if (error) {
      gutil.log(gutil.colors.red(`${error}`));
      return;
    } else {
      gutil.log(stdout);
      gutil.log(gutil.colors.red(stderr));
    }
  });
});