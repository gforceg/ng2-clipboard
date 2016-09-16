#!/bin/bash
printf 'compiling\n'
tsc
printf 'copying files\n'
cp ./src/*/*.css ./dist/*/
cp ./src/*/*.html ./dist/*/
