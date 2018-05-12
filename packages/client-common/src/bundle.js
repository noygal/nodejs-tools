const Bundler = require('parcel-bundler')

const init = ({source, outDir}, bundlerOptions = {}) =>
  new Bundler(source, Object.assign({
    outDir
  }, bundlerOptions))

module.exports = { init }
