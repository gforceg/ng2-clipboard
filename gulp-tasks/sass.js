var gulp = require('gulp');
let gutil = require('gulp-util');

var sass = require('gulp-sass');

let join = require('path').join;
let config = require('../config.json');
const IN_DIR = config.sourceDir;
const OUT_DIR = config.buildDir;

gulp.task('sass', function () {

    gulp.src(join(IN_DIR, '/**/*.scss'))
        .pipe(
          sass({
          sourceComments: true,
          outputStyle: 'expanded',
          errorLogToConsole: true})
        )
        .pipe(gulp.dest(OUT_DIR));
});