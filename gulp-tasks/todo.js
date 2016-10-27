var gulp = require('gulp');
let gutil = require('gulp-util');
let config = require('../tasks-config.js');


var todo = require('gulp-todo');

gulp.task('todo', () => {
  gulp.src(['**/*.{ts,html,scss}', 'gulp-tasks/*.js', 'gulpfile.js', '!node_modules/**/*', `!${config.package.name}/**/*`, `!${config.TMP_DIR}/**/*`])
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
