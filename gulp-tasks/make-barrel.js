let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let fs = require('fs');
let config = require('../tasks-config.js');
let aotConfig = require('../tsconfig-aot.json');

gulp.task('make barrel', () => {
  let barrelFilename = `${config.package.name}.ts`;
  let buffer = `export * from './${config.OUT_DIR}/index';
`;

  //  dynamically set the files array in tsconfig-aot.json to point at the new barrel
  aotConfig.files = [barrelFilename];
  fs.writeFileSync('tsconfig-aot.json', JSON.stringify(aotConfig, null, '\t'));
  return fs.writeFileSync(join('.', barrelFilename), buffer);
});