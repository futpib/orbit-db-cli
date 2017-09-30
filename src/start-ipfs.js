'use strict'

const IPFS = require('ipfs')

const pool = new Map()

const startIpfs = (config = {}) => {
  return new Promise((resolve, reject) => {
    if (pool.has(config.repo)) {
      resolve(pool.get(config.repo))
      return
    }
    const ipfs = new IPFS(config)
    pool.set(config.repo, ipfs)
    ipfs.on('error', reject)
    ipfs.on('ready', () => resolve(ipfs))
  })
}

module.exports = startIpfs
