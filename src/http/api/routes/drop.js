'use strict'

const Joi = require('joi')

const openDatabase = require('../../../lib/open-database')

module.exports = (server) => {
  server.route({
    method: '*',
    path: '/api/v0/drop',
    handler: async (request, reply) => {
      const { database, type } = request.query
      const db = await openDatabase(database, type)
      await db.drop()
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
