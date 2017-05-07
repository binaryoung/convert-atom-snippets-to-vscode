#!/usr/bin/env node

const commander = require('commander')
const process = require('process')
const fs = require('fs')
const Converter = require('./converter')

commander
  .version('1.0.0')
  .arguments('<snippetPath> [outputPath]')
  .action(function(snippetPath, outputPath) {
    if (
      typeof outputPath === 'undefined' ||
      !fs.statSync(outputPath).isDirectory()
    ) {
      outputPath = process.cwd()
    }
    new Converter(snippetPath, outputPath, process.cwd()).convert()
  })
  .parse(process.argv)
