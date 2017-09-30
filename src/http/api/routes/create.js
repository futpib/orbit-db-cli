'use strict'

const Joi = require('joi')

const createDatabase = require('../../../lib/create-database')

const types = ['eventlog', 'feed', 'docstore', 'keyvalue', 'counter']

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/create',
    handler: async (request, reply) => {
      const { database, type } = request.query
      const db = await createDatabase(database, type)
      reply({
        ID: db.id,
      })
    },
    config: {
      validate: {
        query: {
          database: Joi.string().required(),
          type: Joi.string().valid(...types),
        },
      },
    },
  })
}
