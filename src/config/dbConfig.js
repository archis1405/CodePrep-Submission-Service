const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');

async function connectToDB(){
    
    try {
        if(NODE_ENV == 'development'){
            await mongoose.connect(ATLAS_DB_URL);
        }
    }

    catch(error){
        console.error('Error connecting to database');
        console.error(error);
    }
}

module.exports = connectToDB;