#!/usr/bin/env node

const commander = require('commander')
const process = require('process')
const fs = require('fs')
const Converter = require('./converter')

commander
  .version('1.0.0')
  .arguments('<snippetPath> [outputPath]')
  .option('-c, --combine', 'Combine Snippets')
  .action(function(snippetPath, outputPath, options) {
    if (
      typeof outputPath === 'undefined' ||
      !fs.statSync(outputPath).isDirectory()
    ) {
      outputPath = process.cwd()
    }
    let { combine = false } = options
    new Converter(snippetPath, outputPath, process.cwd()).convert(combine)
  })
  .parse(process.argv)
