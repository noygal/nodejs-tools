const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

/**
 *  @param {Object} options options object
 *  @param {string} options.mongoUri remote mongodb url - https://docs.mongodb.com/manual/reference/connection-string/
 *  @param {string} options.dbName
 *  @param {Object} options.mongodbOptions options mongodb client - http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html
 *  @returns {Promise} - resolved to collection
 */
const create = ({mongoUri, dbName, mongodbOptions = {}}) =>
  MongoClient.connect(mongoUri, Object.assign({
    validateOptions: true
  }, mongodbOptions))
    .then(client => client.db(dbName))

module.exports = { create, ObjectId }
