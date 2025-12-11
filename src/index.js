const fastify = require('fastify')({ logger: true });
const app = require('./app');
const serverConfig = require('./config/serverConfig');
require('dotenv').config();

fastify.register(app);

fastify.listen({port: PORT} , (err) =>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }

    console.log(`Server is running on port ${PORT}`);
});