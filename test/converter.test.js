import test from 'ava'
import Converter from './../src/converter'
import fs from 'fs'
import path from 'path'

test('Convert from relative path without point out output dir', t => {
  new Converter('store/async.cson', __dirname, __dirname).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './async.json'))
})

test('Convert from relative path with absolute output dir', t => {
  new Converter(
    'store/async.cson',
    path.join(__dirname, 'store/output'),
    __dirname
  ).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './store/output/async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
})

test('Convert from relative path with relative output dir', t => {
  new Converter('store/async.cson', 'store/output', __dirname).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './store/output/async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
})

test('Convert from absolute path without point out output dir', t => {
  new Converter(
    path.join(__dirname, 'store/async.cson'),
    __dirname,
    __dirname
  ).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './async.json'))
})

test('Convert from absolute path with absolute output dir', t => {
  new Converter(
    path.join(__dirname, 'store/async.cson'),
    path.join(__dirname, 'store/output'),
    __dirname
  ).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './store/output/async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
})

test('Convert from absolute path with relative output dir', t => {
  new Converter(
    path.join(__dirname, 'store/async.cson'),
    'store/output',
    __dirname
  ).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(path.join(__dirname, './store/output/async.json'))
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
})

test('Convert from relative dir without point out output dir', t => {
  new Converter('store', __dirname, __dirname).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(path.join(__dirname, './async.json'))
  let objectSnippet = fs.readFileSync(path.join(__dirname, './objects.json'))
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './async.json'))
  fs.unlinkSync(path.join(__dirname, './objects.json'))
})

test('Convert from relative dir with absolute output dir', t => {
  new Converter(
    'store',
    path.join(__dirname, 'store/output'),
    __dirname
  ).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/async.json')
  )
  let objectSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/objects.json')
  )
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
  fs.unlinkSync(path.join(__dirname, './store/output/objects.json'))
})

test('Convert from relative dir with relative output dir', t => {
  new Converter('store', 'store/output', __dirname).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/async.json')
  )
  let objectSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/objects.json')
  )
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
  fs.unlinkSync(path.join(__dirname, './store/output/objects.json'))
})

test('Convert from absolute dir without point out output dir', t => {
  new Converter(path.join(__dirname, 'store'), __dirname, __dirname).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(path.join(__dirname, './async.json'))
  let objectSnippet = fs.readFileSync(path.join(__dirname, './objects.json'))
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './async.json'))
  fs.unlinkSync(path.join(__dirname, './objects.json'))
})

test('Convert from absolute dir with absolute output dir', t => {
  new Converter(
    path.join(__dirname, 'store'),
    path.join(__dirname, 'store/output'),
    __dirname
  ).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/async.json')
  )
  let objectSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/objects.json')
  )
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
  fs.unlinkSync(path.join(__dirname, './store/output/objects.json'))
})

test('Convert from absolute dir with relative output dir', t => {
  new Converter(
    path.join(__dirname, 'store'),
    'store/output',
    __dirname
  ).convert()
  let asyncFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let objectFile = fs.readFileSync(
    path.join(__dirname, './store/converted/objects.json')
  )

  let asyncSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/async.json')
  )
  let objectSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/objects.json')
  )
  t.deepEqual(asyncSnippet, asyncFile)
  t.deepEqual(objectSnippet, objectFile)
  fs.unlinkSync(path.join(__dirname, './store/output/async.json'))
  fs.unlinkSync(path.join(__dirname, './store/output/objects.json'))
})

test('Test with combine option', t => {
  new Converter(
    'store',
    path.join(__dirname, 'store/output'),
    __dirname
  ).convert(true)
  let combineFile = fs.readFileSync(
    path.join(__dirname, './store/converted/combine.json')
  )

  let combineSnippet = fs.readFileSync(
    path.join(__dirname, './store/output/snippets.json')
  )

  t.deepEqual(combineSnippet, combineFile)

  fs.unlinkSync(path.join(__dirname, './store/output/snippets.json'))
})

test('Output dir do not exist', t => {
  new Converter('store/async.cson', 'store/dirDoNotExits', __dirname).convert()
  let convertedFile = fs.readFileSync(
    path.join(__dirname, './store/converted/async.json')
  )
  let file = fs.readFileSync(
    path.join(__dirname, 'store/dirDoNotExits/async.json')
  )
  t.deepEqual(file, convertedFile)
  fs.unlinkSync(path.join(__dirname, 'store/dirDoNotExits/async.json'))
  fs.rmdirSync(path.join(__dirname, 'store/dirDoNotExits'))
})
