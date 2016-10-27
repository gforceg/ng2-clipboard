let gulp = require('gulp');
let gutil = require('gulp-util');

let join = require('path').join;
let fs = require('fs');
let rimraf = require('rimraf');

let config = require('../tasks-config.js');

gulp.task('remove temp', () => {
  return rimraf.sync(config.TMP_DIR);
});
