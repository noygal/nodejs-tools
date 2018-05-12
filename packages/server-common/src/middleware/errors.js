
const init = ({logger}) => (err, req, res, next) => {
  logger.error(err)
  if (res.statusCode < 400) res.status(500)
  res.send(err)
}

module.exports = { init }
