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

  // update the .gitignore to ignore the OUT_DIR
  let gitignoreBuffer = String(fs.readFileSync('.gitignore')).split('\n');
  
  let already_ignored = false;
  gitignoreBuffer.forEach((line) => {
    if (line === `${config.OUT_DIR}/`) { already_ignored = true; }
  });
  if (!already_ignored) { gitignoreBuffer.push(`${config.OUT_DIR}/`); }
  
  gitignoreBuffer = gitignoreBuffer.join('\n');
  fs.writeFileSync('.gitignore', gitignoreBuffer);

  return fs.writeFileSync(join('.', barrelFilename), buffer);
});