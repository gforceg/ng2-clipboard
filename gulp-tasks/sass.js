var gulp = require('gulp');
let gutil = require('gulp-util');

let join = require('path').join;

let config = require('../.config/tasks-config.js');

var sass = require('gulp-sass');

gulp.task('sass', function () {

    return gulp.src(join(config.TMP_DIR, '/**/*.scss'))
        .pipe(
          sass({
          sourceComments: false,
          outputStyle: 'compact',
          errorLogToConsole: true})
        )
        .pipe(gulp.dest(config.TMP_DIR));
});