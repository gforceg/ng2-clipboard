let gulp = require('gulp');
require('require-dir')('./gulp-tasks');

gulp.task('default', () => {
  gulp.start('compile-ts');
})