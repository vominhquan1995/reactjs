const dedent = require('dedent')
const fse = require('fs-extra')
const { run, options, help } = require('runjs')
const Parallel = require('paralleljs')
const glob = require('glob')
const enviroments = ['develop', 'release']

function dev() {
  run('tsc')
  run('concurrently "tsc --pretty --watch" "node server.js"')
}

function build(enviroment) {
  if (!enviroment) {
    run('run build --help')
    return false
  }

  if (enviroments.indexOf(enviroment) === -1) {
    run('run build --help')
    return false
  }

  tsc()
  replaceString(enviroment)
  run(`cross-env BUILD=${enviroment} next build`)
  return true
}

function tsc() {
  run('tsc')
}

function replaceString(enviroment = 'development') {
  run(`node ./tool/replace-string.js ${enviroment}`)
}

function start() {
  run('node server.js')
}

function analyze() {
  run('cross-env ANALYZE=1 next build')
}

function clean() {
  const clean = function (file) {
    const fse = require('fs-extra')
    fse.removeSync(file)
    return file
  }

  const log = function (result) {
    console.log(result) // array file name
  }

  const ignore = [
    './static/**/*',
    './runfile.js',
    './next.config.js',
    './tool/**/*',
    './node_modules/**/*',
  ]

  glob('./**/*.js', { ignore: ignore }, function (err, files) {
    if (err) {
      console.log(err)
      return
    }
    const p = new Parallel(files)
    p.map(clean).then(log)
  })

  fse.removeSync('./dist')
  fse.removeSync('./server.js')
}

dev.help = 'Start server'
build.help = 'Build src'
analyze.help = 'Generate bundle size report'
clean.help = 'Delete all js file, dist folder'

module.exports = { dev, build, analyze, clean }
