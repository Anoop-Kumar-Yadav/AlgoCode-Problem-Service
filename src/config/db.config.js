const mongoose = require("mongoose");
const dns = require('node:dns');

const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

dns.setServers(['8.8.8.8', '1.1.1.1']); 
 
async function connectDB() {
  try {
    if (NODE_ENV == "development") {

      console.log("Connecting to Database ....");  
      await mongoose.connect(ATLAS_DB_URL);
      console.log("Successfully Connection to Database");
      
    }
  } catch (error) {
    console.log("Unable to connect to DB Server");
    console.log(error);
  }
}

module.exports = connectDB;
