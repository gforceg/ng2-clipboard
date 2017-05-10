let gulp = require('gulp');
let runSequence = require('run-sequence').use(gulp);

require('require-dir')('./gulp-tasks');

//fixme: auto gitignore configs.BUNDLE_DIR

gulp.task('build', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'make barrel',
    'copy',
    'sass',
    'inline',
    'compile',
    'aot',
    'bundle',
    'remove temp',
    done
  );
});

gulp.task('default', (done) => {
  runSequence(
    'to-do',
    'set build vars',
    'make barrel',
    'copy',
    'sass',
    'inline',
    'compile',
    done
  );
});

gulp.task('watch', ['default'], (done) => {
  let watcher = gulp.watch('./src/**/*.{ts,html,css}', ['default']);
  watcher.on('change', (e) => {
    console.log(e.path + ' was ' + e.type + ', running default');
  });
})
