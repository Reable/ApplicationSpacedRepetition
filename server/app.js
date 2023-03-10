'use strict'

require('dotenv').config();

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (app, opts) {

  // Connect with MongoDB
  app.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: `mongodb://localhost:27017/${process.env.DATABASE}`
  });

  // Upload all plugins
  app.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  // Upload all routes
  app.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  });
}