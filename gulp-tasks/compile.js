let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let config = require('../tasks-config.js');

let inline = require('gulp-inline-ng2-template');
let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('sourcemaps', ['tsc'], () => {
  return gulp.src(join(config.OUT_DIR, '**/*.js'))
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.OUT_DIR));
})

gulp.task('tsc', () => {

  return gulp.src(join(config.OUT_DIR, '**/*.ts'))
  .pipe(inline({ useRelativePaths: true }))
  .pipe(ts(config.tsc.compilerOptions))
  .pipe(gulp.dest(config.OUT_DIR));
});

gulp.task('compile', ['tsc', 'sourcemaps'], () => { } );
