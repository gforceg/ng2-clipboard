let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let posixJoin = require('path').posix.join;
let fs = require('fs');
let config = require('../.config/tasks-config.js');
let aotConfig = require('../tsconfig-aot.json');

gulp.task('make barrel', () => {
  let barrelFilename = `${config.package.name}.ts`;
  let exportPath = posixJoin('./', config.OUT_DIR, 'index');
  let buffer = `export * from './${exportPath}';`;

  return fs.writeFileSync(join('.', barrelFilename), buffer);
});