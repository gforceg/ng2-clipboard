let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let config = require('../config/tasks-config.js');

let inline = require('gulp-inline-ng2-template');

gulp.task('inline', () => {
  return gulp.src(join(config.TMP_DIR, '**/*.ts'))
  .pipe(inline({useRelativePaths: true}))
  .pipe(gulp.dest(config.OUT_DIR));
});
