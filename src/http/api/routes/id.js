'use strict'

const config = require('../../../config')
const startIpfs = require('../../../start-ipfs.js')

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/id',
    handler: async (request, reply) => {
      const ipfsConfig = Object.assign({}, config.ipfsConfig)
      const ipfs = await startIpfs(ipfsConfig)
      const peerId = await ipfs.config.get('Identity.PeerID')
      reply({
        ID: peerId
      })
    },
  })
}
