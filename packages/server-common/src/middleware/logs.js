const expressWinston = require('express-winston')

const init = ({logger, options = {}}) =>
  expressWinston.logger({
    winstonInstance: logger,
    colorize: true,
    expressFormat: false,
    ...options
  })

module.exports = { init }
