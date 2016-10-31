#!/usr/bin/env node

'use strict';

const path = require('path');
const Builder = require('systemjs-builder');
const tasksConfig = require('./.config/tasks-config');

function getBuildConfig() { 
  return {
    baseUrl: '.',
    transpiler: 'typescript',
    map: {
      '@angular': 'node_modules/@angular',
      'ts-clipboard': 'node_modules/ts-clipboard',
      'ng2-font-awesome': 'node_modules/ng2-font-awesome',
      'typescript': 'node_modules/typescript/lib/typescript'
    },
    paths: {
      '*': '*.js',
    },
    meta: {
      './node_modules/@angular/*': {build: false}
    }
  };
}

function build(minify) {
  var builder = new Builder();
  builder.config(getBuildConfig());
  let fileExt;
  minify ? fileExt = '.umd.min.js' : fileExt = '.umd.js';
  let outPath = path.join(tasksConfig.BUNDLE_DIR, `${tasksConfig.package.name}${fileExt}`);
  console.log(`bundling: ${outPath}`);
  builder.buildStatic(tasksConfig.package.name, outPath, {format: 'umd', minify: minify})
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
