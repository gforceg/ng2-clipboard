let gulp = require('gulp');
let gutil = require('gulp-util');

let join = require('path').join;
let fs = require('fs');
let rimraf = require('rimraf');

let config = require('../tasks-config.js');

gulp.task('clean', () => {

  return [config.OUT_DIR, 'factories/', config.TMP_DIR].forEach(
  (dir) => {
    try {
      fs.accessSync(dir);
    } catch (ex) {;
        gutil.log(gutil.colors.yellow(`${ex.message} (skipping)`));
      return;
    }
    try {
      rimraf.sync(dir);
    } catch (ex) {
        gutil.log(gutil.colors.red(`${ex.message} (skipping)`));
        throw ex;
    }
  });
});
