const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
/**
 * @returns {MongoClient}
 */
export async function mongodbConnect() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('events').command({ ping: 1 });
    console.log('Connected to MongoDB...');
    return client;
  } catch (error) {
    return error;
  }
}

export async function insertDocument({ client, collection, collectionData }) {
  try {
    const db = client.db();
    return await db.collection(collection).insertOne(collectionData);
  } catch (error) {
    return error;
  }
}
