'use strict'

const Joi = require('joi')

const openDatabase = require('../../../lib/open-database')

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api/v0/info',
    handler: async (request, reply) => {
      const db = await openDatabase(request.query.name)
      reply({
        Path: db.path,
        Type: db.type,
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
