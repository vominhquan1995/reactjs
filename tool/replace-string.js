#! /usr/bin/node
const result = require('dotenv').config()
const replace = require('replace-in-file')
const path = require('path')
if (result.error) {
  console.log(
    'Thiếu file .env trong thư mục gốc của project, đọc README để biết thêm'
  )
  process.exit(1)
}
let env = process.argv[2]
let dir = __dirname
// replace variable phù hợp với nơi deploy
let options = null
let files = [
  path.join(dir, '..', 'config', 'urlConfig.js'),
  path.join(dir, '..', 'server.js'),
]
let from = [
  /WILL_BE_REPLACE_PRODUCTION_URL_IMAGE/,
]
if (env === 'release') {
  options = {
    files: files,
    from: from,
    to: [
      'https://www.google.com/',
    ],
  }
} else {
  options = {
    files: files,
    from: from,
    to: [
      'https://www.google.com/',
    ],
  }
}
const changes = replace.sync(options)
console.log('Modified files:', changes.join(', '))
