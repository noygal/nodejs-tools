const path = require('path')
const common = require('../')

const port = 3000

const logger = common.factory.logger.init()

logger.info('Starting server...')
const create = async () => {
  const app = common.factory.server.createApp()

  logger.info('Mounting logging middleware')
  app.use('/api/v1', common.middleware.logs.init({logger}))

  logger.info('Creating swagger')
  common.factory.server.createOpenapiServer({
    app,
    title: 'Basic example service',
    basePath: '/api/v1',
    // The path to the endpoints moddleware, resolved by folder structure
    paths: path.join(__dirname, './paths'),
    // Object of dependencies, passed to the endpoints, resolved by name
    dependencies: {logger, anyDep: {foo: (logger) => logger.info('I can pass anything')}}
  })

  logger.info('Mounting static folder')
  app.use(common.middleware.general.static(path.join(__dirname, 'public')))

  logger.info('Mounting error handler')
  app.use(common.middleware.errors.init({logger}))

  logger.info('Mounting 404 handler')
  app.use((req, res) => res.sendStatus(404))

  logger.info('Start listening')
  return app.listen(port, (err) => err
    ? logger.error(err)
    : logger.info('Start listen on port: ' + port))
}

process.on('unhandledRejection', error => {
  logger.error('unhandledRejection', error)
})

module.exports = create()
