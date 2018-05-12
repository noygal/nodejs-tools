module.exports = {
  factory: {
    logger: require('./src/factory/logger'),
    mongodb: require('./src/factory/mongodb'),
    server: require('./src/factory/server')
  },
  middleware: {
    errors: require('./src/middleware/errors'),
    general: require('./src/middleware/general'),
    logs: require('./src/middleware/logs')
  }
}
