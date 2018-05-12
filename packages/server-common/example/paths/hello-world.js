module.exports = (logger, anyDep) => {
  anyDep.foo(logger)
  const path = {
    get: (req, res, next) =>
      res.send({msg: 'Hello World!', num: req.query.num || 1})
  }
  path.get.apiDoc = {
    description: 'Hello World',
    operationId: 'getHi',
    parameters: [{
      description: 'Numeric parameter',
      in: 'query',
      name: 'num',
      type: 'number',
      minimum: 2,
      required: false
    }],
    responses: {
      200: {
        description: 'Operation successful',
        schema: {
          type: 'object',
          properties: {
            msg: {type: 'string'},
            num: {
              type: 'number',
              minimum: 1
            }
          }
        }
      }
    }
  }
  return path
}
