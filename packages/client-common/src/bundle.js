const Bundler = require('parcel-bundler')

const init = ({source, outDir}, bundlerOptions = {}) =>
  new Bundler(source, {
    outDir,
    ...bundlerOptions
  })

module.exports = { init }
