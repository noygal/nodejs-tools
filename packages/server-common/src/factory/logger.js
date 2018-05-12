const winston = require('winston')

/**
 *  @param {Object} options options object
 *  @param {boolean} options.console console transport
 *  @param {boolean} options.file file transport
 *  @param {string} options.fileName
 *  @returns {Object} - winston logger
 */
const init = (options = {console: true}) => new (winston.Logger)({
  transports: []
    .concat(options.console ? new (winston.transports.Console)({colorize: true}) : [])
    .concat(options.file ? new (winston.transports.File)({ filename: options.fileName }) : [])
})

module.exports = { init }
