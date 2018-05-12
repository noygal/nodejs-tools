const express = require('express')
const openapi = require('express-openapi')
const swaggerUi = require('swagger-ui-express')
const mw = require('../middleware/general')

const createApp = ({isMinimal = false} = {}) => {
  const app = express()
  if (isMinimal) return app
  app.use(mw.all)
  return app
}

const createRoute = () => express.Router()

const createOpenapiServer = ({
  mountDevDocs = true,
  app = createRoute(),
  title = 'My Service',
  version = '1.0.0',
  basePath = '/api/v1',
  dependencies = [],
  paths = './src/paths'
}, openapiOptions = {}) => {
  openapi.initialize(Object.assign({
    app,
    apiDoc: {
      swagger: '2.0',
      basePath,
      consumes: ['application/json'],
      produces: ['application/json'],
      info: { title, version },
      paths: {}
    },
    dependencies,
    paths
  }, openapiOptions))

  if (mountDevDocs) {
    app.use(`${basePath}/dev-docs`, swaggerUi.serve, swaggerUi.serve, swaggerUi.setup(null, {
      swaggerUrl: `${basePath}/api-docs`,
      swaggerOptions: {
        validatorUrl: null
      }
    }))
  }

  return app
}

module.exports = {
  createApp,
  createRoute,
  createOpenapiServer
}
