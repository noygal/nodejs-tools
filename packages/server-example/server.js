const path = require('path')
const common = require('@noygal/server-common')
const client = require('@noygal/client-example')

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
    paths: path.join(__dirname, './src/paths'),
    // Object of dependencies, passed to the endpoints, resolved by name
    dependencies: {logger, anyDep: {foo: (logger) => logger.info('I can pass anything')}}
  })

  logger.info('Mounting web client')
  app.use(['/', '/index.html'], client.init({openApiPath: '/api/v1/api-docs'}).middleware())

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
