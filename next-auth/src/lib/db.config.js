import { MongoClient, ServerApiVersion } from 'mongodb';

/**
 * @returns {MongoClient}
 */
export async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_DB_URL, {
    serverApi: {
      deprecationErrors: true,
      strict: true,
      version: ServerApiVersion.v1,
    },
  });

  const res = await client.connect();
  return res;
}
