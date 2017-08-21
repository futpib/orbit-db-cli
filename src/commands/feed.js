'use strict'

const command = 'feed'
exports.command = `${command} <command> <dbname>`
exports.desc = 'Feed Database'

exports.builder = function (yargs) {
  return yargs
    .commandDir(command)
    .usage(`Usage: $0 ${command} <command>`)
    .option('progress', {
      alias: 'p',
      describe: 'Display pretty progress bars',
      default: false,
    })
    .option('limit', {
      alias: 'l',
      describe: 'Limit how many entries to load to the database',
      default: -1,
    })
    .option('timing', {
      alias: 't',
      describe: 'Display how long the command took to run',
      default: false,
    })
}

exports.handler = function (argv) {}