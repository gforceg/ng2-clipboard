let gulp = require('gulp');

let execSync = require('child_process').execSync;

gulp.task('compile-ts', () => {
  execSync('tsc');
});
