'use strict'

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/delete',
    handler: async (request) => 'foo',
  })
}
