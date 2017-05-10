let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let posixJoin = require('path').posix.join;
let fs = require('fs');
let config = require('../config/tasks-config.js');

gulp.task('make barrel', () => {
  let exportPath = posixJoin('./', config.OUT_DIR, config.barrel_file_name);
  let buffer = `export * from './${exportPath}';`;

  try {
  let srcBarrelBuffer = fs.readFileSync('src/index.ts', 'utf8')
  let buffer = srcBarrelBuffer.replace(/'\.\/(.+)'/gi, `'./${config.package_config.name}/$1'`)
  return fs.writeFileSync(join('.', `${config.barrel_file_name}.ts`), buffer);
  } catch(ex) {
    throw ex
  }
});