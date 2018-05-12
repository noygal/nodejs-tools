
const test = require('tape')

test('Requiring package', (t) => {
  t.plan(1)
  require('./')
  t.pass('No missing deps')
})

test('Example running', async (t) => {
  t.plan(1)
  const server = await require('./example/server')
  server.close()
  t.pass('server running')
})
