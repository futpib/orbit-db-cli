'use strict'

const packageConfig = require('../../../../package.json');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api/v0/version',
    handler: (request, reply) => reply({
      Version: packageConfig.version
    }),
  })
}
