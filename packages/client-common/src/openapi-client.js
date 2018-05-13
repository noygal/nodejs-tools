const Swagger = require('swagger-client')

const init = (url) =>
  Swagger(url)

module.exports = { init }
