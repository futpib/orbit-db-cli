'use strict'

const Joi = require('joi');

const openDatabase = require('../../../lib/open-database')
const replicate = require('../../../lib/replication-loop')

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/replicate',
    handler: async (request, reply) => {
      // FIXME: Error: This command must be run in online mode. Try running 'ipfs daemon' first.
      const db = await openDatabase(request.query.database)
      await replicate(db)
      reply({
        ID: db.id,
      })
    },
    config: {
      validate: {
        query: {
          database: Joi.string().required(),
        },
      },
    },
  })
}
