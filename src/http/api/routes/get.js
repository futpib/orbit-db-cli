'use strict'

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/get',
    handler: async (request) => 'foo',
  })
}
