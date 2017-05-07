const Snippet = require('./snippet')
const path = require('path')
const fs = require('fs')
const CSON = require('season')

class Converter {
  constructor(snippetPath, outputPath, processPath) {
    this.processPath = processPath
    this.outputPath = this.absolutePath(outputPath)
    this.snippetsPath = this.parsePath(this.absolutePath(snippetPath))
    this.snippets = {}
  }
  absolutePath(snippetPath) {
    return path.resolve(this.processPath, snippetPath)
  }
  parsePath(snippetsPath) {
    let stats = fs.statSync(snippetsPath)
    if (stats.isDirectory()) {
      return this.parseDir(snippetsPath)
    } else {
      return [snippetsPath]
    }
  }
  parseDir(dirPath) {
    let files = fs.readdirSync(dirPath)

    return files
      .map(function(filename) {
        let fullname = path.join(dirPath, filename)
        let stats = fs.statSync(fullname)
        if (!stats.isDirectory() && path.extname(fullname) == '.cson') {
          return fullname
        }
        return
      })
      .filter(value => typeof value !== 'undefined')
  }
  writeSnippets() {
    Object.keys(this.snippets).forEach(function(key) {
      let snippetPath = path.join(this.outputPath, key + '.json')
      CSON.writeFileSync(snippetPath, this.snippets[key])
    }, this)
  }
  convert() {
    this.snippetsPath.forEach(function(snippetPath) {
      let vscodeSnippet = new Snippet(snippetPath).convert()
      let name = path.parse(snippetPath).name
      this.snippets[name] = vscodeSnippet
    }, this)
    this.writeSnippets()
  }
}

module.exports = Converter
