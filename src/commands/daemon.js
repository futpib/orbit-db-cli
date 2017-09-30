'use strict'

const HttpApi = require('../http')

exports.command = 'daemon'
exports.desc = 'Start a long-running daemon process'

exports.builder = yargs => yargs
  .usage('Usage: $0 daemon')
  .option('port', {
    describe: 'The port for HTTP API to listen',
    default: 5101,
    type: 'number',
  })
  .option('host', {
    describe: 'IP address for HTTP API to listen',
    default: 'localhost',
    type: 'string',
  })

exports.handler = async (argv) => {
  console.log('Initializing daemon...')

  const api = new HttpApi(argv)
  await api.start()

  console.log('Daemon is ready')

  process.on('SIGINT', async () => {
    console.log('Received interrupt signal, shutting down...')

    await api.stop()

    process.exit(0)
  })
}
