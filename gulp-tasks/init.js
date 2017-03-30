let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let fs = require('fs');
let config = require('../config/tasks-config.js');

gulp.task('init', [ 'set build vars', 'make barrel' ], () => {});