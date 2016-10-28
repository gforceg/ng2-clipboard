#!/usr/bin/env node

'use strict';

/*
  this file was ripped out of the ng2-bootstrap project

  The MIT License (MIT)

Copyright (c) 2015 Valor Software
Copyright (c) 2015 Dmitriy Shekhovtsov<valorkin@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*eslint no-console: 0, no-sync: 0*/

// UMD bundler
// simple and yet reusable system.js bundler
// bundles, minifies and gzips

const fs = require('fs');
const del = require('del');
const path = require('path');
const zlib = require('zlib');
const async = require('async');
const Builder = require('systemjs-builder');

const pkg = require('./package.json');
const name = pkg.name;
const targetFolder = path.resolve('./bundles');

async.waterfall([
  cleanBundlesFolder,
  getSystemJsBundleConfig,
  buildSystemJs({minify: false, sourceMaps: true, mangle: false, noEmitHelpers: false, declaration: true}),
  getSystemJsBundleConfig,
  buildSystemJs({minify: true, sourceMaps: true, mangle: false, noEmitHelpers: false, declaration: true})
], err => {
  if (err) {
    throw err;
  }
});

function getSystemJsBundleConfig(cb) {
  const config = {
    baseURL: '.',
    transpiler: 'typescript',
    typescriptOptions: {
      module: 'cjs'
    },
    map: {
      typescript: './node_modules/typescript/lib/typescript',
      '@angular': './node_modules/@angular',
      rxjs: './node_modules/rxjs'
    },
    paths: {
      '*': '*.js'
    },
    meta: {
      './node_modules/@angular/*': {build: false},
      './node_modules/rxjs/*': {build: false},
      moment: {build: false}
    }
  };

  return cb(null, config);
}

function cleanBundlesFolder(cb) {
  return del(targetFolder)
    .then(paths => {
      console.log('Deleted files and folders:\n', paths.join('\n'));
      cb();
    });
}

function buildSystemJs(options) {
  return (config, cb) => {
    const minPostFix = options && options.minify ? '.umd.min' : '.umd';
    const fileName = `${name}${minPostFix}.js`;
    const dest = path.resolve(__dirname, targetFolder, fileName);
    const builder = new Builder();

    console.log('Bundling system.js file:', fileName, options);
    builder.config(config);

    return builder
      .buildStatic(name, dest, {format: 'umd'})
      .then(() => {
        console.log('Build complete.');
        cb();
      })
      .catch(err => {
        console.log('Error', err);
        cb();
      });
  };
}
