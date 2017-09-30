'use strict'

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/put',
    handler: async (request) => 'foo',
  })
}
