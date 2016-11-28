var gulp = require('gulp');
let gutil = require('gulp-util');
let config = require('../config/tasks-config.js');

var todo = require('gulp-todo');

gulp.task('todo', () => {
  gulp.src(['**/*.{ts,html,scss}', 'gulp-tasks/*.js', 'gulpfile.js', '!node_modules/**/*', `!${config.package_config.name}/**/*`, `!${config.TMP_DIR}/**/*`])
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
