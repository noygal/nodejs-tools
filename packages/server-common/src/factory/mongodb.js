/**
 *  @param {Object} options options object
 *  @param {Object} options.mongodb mongodb object
 *  @param {string} options.mongoUri remote mongodb url - https://docs.mongodb.com/manual/reference/connection-string/
 *  @param {Object} options.mongodbOptions options mongodb client - http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html
 *  @returns {Promise} - resolved to db
 */
const create = ({
  mongoUri = 'mongodb://localhost:27017/testing',
  mongodb: { MongoClient, ObjectId } = require('mongodb'),
  mongodbOptions = {}
}) =>
  MongoClient.connect(mongoUri, {
    validateOptions: true,
    useNewUrlParser: true,
    ...mongodbOptions
  })
    .then(client => ({
      ObjectId,
      db: client.db(),
      close: () => client.close()
    }))

module.exports = { create }
