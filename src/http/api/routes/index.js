'use strict'

module.exports = server => {
  require('./id')(server)
  require('./version')(server)

  require('./create')(server)
  require('./drop')(server)
  require('./info')(server)
  require('./replicate')(server)

  require('./add')(server)
  require('./del')(server)
  require('./get')(server)
  require('./put')(server)
  require('./inc')(server)
}
