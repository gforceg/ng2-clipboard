let gulp = require('gulp');
let gutil = require('gulp-util');

let execSync = require('child_process').execSync;

gulp.task('aot', () => {
  return execSync('node_modules/.bin/ngc -p tsconfig-aot.json');
});