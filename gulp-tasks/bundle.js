let gulp = require('gulp');
let gutil = require('gulp-util');

let execSync = require('child_process').execSync;

gulp.task('bundle', () => {
  return execSync('node bundlefile.js', (error, stdout, stderr) => {
    if (error) {
      gutil.log(gutil.colors.red(`${error}`));
      return;
    } else {
      gutil.log(stdout);
      gutil.log(gutil.colors.red(stderr));
    }
  });
});