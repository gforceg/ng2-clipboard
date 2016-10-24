var gulp = require('gulp');
let gutil = require('gulp-util');

var todo = require('gulp-todo');

gulp.task('todo', () => {
  gulp.src('**/*.{ts,html,scss}')
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
