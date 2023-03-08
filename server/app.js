const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {

  // Upload all plugins
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // Upload all routes
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
