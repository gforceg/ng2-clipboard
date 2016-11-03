let gulp = require('gulp');
let gutil = require('gulp-util');
let path = require('path');
let execSync = require('child_process').execSync;

gulp.task('aot', () => {
  return execSync(`${path.join('node_modules', '.bin', 'ngc')} -p tsconfig-aot.json`);
});