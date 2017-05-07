const nodePath = require('path')
const CSON = require('season')

class Snippet {
  constructor(path) {
    this.path = path
  }

  readAtomSnippet() {
    return CSON.readFileSync(this.path)
  }
  trimAtomSnippet() {
    let snippet = this.readAtomSnippet()
    let key = Object.keys(snippet)[0]
    return snippet[key]
  }
  getAtomSnippet() {
    return this.atomSnippet
      ? this.atomSnippet
      : (this.atomSnippet = this.trimAtomSnippet())
  }
  convertSnippet() {
    let atomSnippet = this.getAtomSnippet()
    Object.keys(atomSnippet).forEach(function(key) {
      atomSnippet[key].description = key
    })

    return atomSnippet
  }
  convert() {
    return this.snippet ? this.snippet : (this.snippet = this.convertSnippet())
  }
}

module.exports = Snippet
