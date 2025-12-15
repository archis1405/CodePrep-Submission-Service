const mongoose = require('mongoose');
const { ATLAS_DB_URL } = require('./serverConfig');

async function connectToDB() {
  try {
    await mongoose.connect(ATLAS_DB_URL);
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Error connecting to database');
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectToDB;