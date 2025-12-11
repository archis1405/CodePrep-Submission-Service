const fastify = require('fastify')({ logger: true }); // calling the fastify constructor
const app = require('./app');
const serverConfig = require('./config/serverConfig');

// fastify.register(require('@fastify/cors'), { 
//   origin: '*', // Allow all origins
//   methods: ['GET', 'PUT', 'POST', 'DELETE'], // Specify allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
// });

fastify.register(app);

fastify.listen({ port: serverConfig.PORT, host: '0.0.0.0' }, async (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1)
    }

    console.log(`Server up at port ${serverConfig.PORT}`);
});