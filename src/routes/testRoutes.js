const { default: pingRequest } = require("../controllers/testController");

async function testRoutes(fastify, options) {
    fastify.get('/ping' , pingRequest);
}

module.exports = testRoutes;