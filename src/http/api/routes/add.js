'use strict'

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/add',
    handler: async (request) => 'foo',
  })
}
