const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '.env' });

const uri = process.env.DBMONGO;

//Create the client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database = null;

//Start the connection
async function connect() {
  if (database) return database;

  try {
    await client.connect();
    database = client.db('real-time-chat');
    console.log('Connection successfully established to MongoDB!');
    return database;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    
    setTimeout(connect, 5000);
    throw error;
  }
}

//Close the connection 
process.on('SIGINT', async () => {
  await client.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});

module.exports = { connect };