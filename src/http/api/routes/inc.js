'use strict'

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/inc',
    handler: async (request) => 'foo',
  })
}
