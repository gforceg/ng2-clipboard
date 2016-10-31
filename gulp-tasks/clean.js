let gulp = require('gulp');
let gutil = require('gulp-util');

let join = require('path').join;
let fs = require('fs');
let rimraf = require('rimraf');

let clean = require('gulp-clean');

let config = require('../.config/tasks-config.js');

gulp.task('clean', () => {

  return gulp.src([
    config.OUT_DIR, config.BUNDLE_DIR, config.FACTORY_DIR, config.TMP_DIR,
    `./${config.package.name}.{js,js.map,d.ts,metadata.json}`, 'src/**/*.{js,js.map,d.ts,metadata.json}',
    './TODO.md'
  ])
  .pipe(clean());
});
