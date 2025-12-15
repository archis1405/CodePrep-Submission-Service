const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repositories/repositoryPlugin');
const apiPlugin = require('./routes/api/apiRoutes');


async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));

    fastify.register(repositoryPlugin);
    fastify.register(servicePlugin);

    fastify.register(apiPlugin, {prefix: '/api'});

}

module.exports = fastifyPlugin(app);