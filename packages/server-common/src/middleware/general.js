const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const express = require('express')

module.exports = {
  compression,
  helmet,
  bodyParser,
  static: express.static,
  all: [ compression(), helmet(), bodyParser.json() ]
}
