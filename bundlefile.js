#!/usr/bin/env node

'use strict';

const path = require('path');
const Builder = require('systemjs-builder');
const tasksConfig = require('./config/tasks-config');

function getBuildConfig() { 
  return tasksConfig.bundle_config;
}

function build(minify) {
  var builder = new Builder();
  builder.config(getBuildConfig());
  let fileExt;
  minify ? fileExt = '.umd.min.js' : fileExt = '.umd.js';
  let outPath = path.join(tasksConfig.BUNDLE_DIR, `${tasksConfig.package_config.name}${fileExt}`);
  console.log(`bundling: ${outPath}`);
  builder.buildStatic(tasksConfig.package_config.name, outPath, {format: 'umd', minify: minify})
  .then(() => {
    console.log(`${outPath} complete`);
  })
  .catch( (err) => {
    console.log(`${outPath} error`);
    throw(err);
  });
}

build(false); // .umd.js
build(true);  // .umd.min.js
