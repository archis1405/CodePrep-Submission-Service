const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const app = require('./app');
const connectToDB = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./utils/errorHandler');

fastify.register(app);
fastify.setErrorHandler(errorHandler);

const startServer = async () => {
  try {
    await connectToDB();
    console.log(mongoose.connection.name);


    await fastify.listen({
      port: serverConfig.PORT,
      host: '0.0.0.0',
    });

    console.log(`Server up at port ${serverConfig.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();