let gulp = require('gulp');
let runSequence = require('run-sequence');

require('require-dir')('./gulp-tasks');

gulp.task('default', (done) => {
  runSequence(
    'todo',
    'sass',
    'compile',
    done
  );
})