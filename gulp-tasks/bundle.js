let gulp = require('gulp');
let gutil = require('gulp-util');

let execSync = require('child_process').execSync;

gulp.task('bundle', () => {
  return execSync('node bundlefile.js');
});