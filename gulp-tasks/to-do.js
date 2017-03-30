var gulp = require('gulp');
let gutil = require('gulp-util');
let config = require('../config/tasks-config.js');

var todo = require('gulp-todo');

gulp.task('to-do', () => {
  return gulp.src(['src/**/*.{ts,html,scss,css}', 'gulp-tasks/*.js', 'gulpfile.js', '!node_modules/**/*', `!${config.OUT_DIR}/**/*`, `!${config.TMP_DIR}/**/*`])
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
