let gulp = require('gulp');
let gutil = require('gulp-util');

let join = require('path').join;
let fs = require('fs');
let execSync = require('child_process').execSync;

let config = require('../tasks-config.js');


gulp.task('aot', () => {
  return execSync('node_modules/.bin/ngc -p tsconfig-aot.json');
});