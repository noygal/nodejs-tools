const common = require('@noygal/client-common')
const path = require('path')
const fs = require('fs')

const init = (config = {}) => {
  fs.writeFileSync('./views/config.js', 'const config = ' + JSON.stringify(config, null, 2))
  return common.bundle.init({
    source: path.join(__dirname, './views/index.html'),
    outDir: path.join(__dirname, './dist')
  })
}

module.exports = { init }
