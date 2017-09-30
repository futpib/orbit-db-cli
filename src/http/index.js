'use strict'

const Hapi = require('hapi')

const routes = require('./api/routes')

class HttpApi {
  constructor(options) {
    this._options = options
  }

  async start() {
    const { host, port } = this._options

    this._server = new Hapi.Server({ debug: { request: ['error'] } })
    this._server.connection({ host, port })
    routes(this._server)

    await this._server.start()

    console.log('API is listening on: %s', this._server.info.uri)
  }

  async stop() {
    await this._server.stop()
    this._server = undefined
  }
}

module.exports = HttpApi
