#!/usr/bin/env node

'use strict';

const path = require('path');
const Builder = require('systemjs-builder');
const tasksConfig = require('./config/tasks-config');

function getBuildConfig() { 
  return tasksConfig.bundle_config;
}

function build(moduleFormat, minify) {
  var builder = new Builder();
  builder.config(getBuildConfig());
  let fileExt;
  minify ? fileExt = `.${moduleFormat}.min.js` : fileExt = `.${moduleFormat}.js`;
  let outPath = path.join(tasksConfig.BUNDLE_DIR, `${tasksConfig.package_config.name}${fileExt}`);
  console.log(`bundling: ${outPath}`);
  builder.buildStatic(tasksConfig.barrel_file_name, outPath, {format: moduleFormat, minify: minify})
  .then(() => {
    console.log(`${outPath} complete`);
  })
  .catch( (err) => {
    console.log(`${outPath} error`);
    throw(err);
  });
}

build('umd', false); // .umd.js
build('umd', true);  // .umd.min.js
build('esm', false); // .esm.js
