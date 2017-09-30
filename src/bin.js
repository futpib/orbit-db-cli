#! /usr/bin/env node
'use strict'

require('make-promises-safe') // installs an 'unhandledRejection' handler
const argv = require('yargs')
const logo = require('./logo')

argv
  .usage(logo + '\n\nUsage: $0 <command> <database>')
  .example('\nSee the Quick Start guide on Github: https://github.com/haadcode/orbit-db-cli#quick-start\n\nOr try running:\n$0 demo hello',
           '')
  .commandDir('commands')
  .demand(1)
  .help('help')
  .alias('h', 'help')
  .argv
