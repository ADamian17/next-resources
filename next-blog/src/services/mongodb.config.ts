import { InsertOneResult, MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
/**
 * @returns {MongoClient}
 */
export async function mongodbConnect(): Promise<MongoClient | unknown> {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('next-blog').command({ ping: 1 });
    console.log('Connected to MongoDB...');
    return client;
  } catch (error) {
    return error;
  }
}

export async function insertDocument<T>({
  client,
  collection,
  collectionData,
}: {
  client: MongoClient;
  collection: string;
  collectionData: any;
}): Promise<InsertOneResult | unknown> {
  try {
    const db = client.db();
    return await db.collection(collection).insertOne(collectionData);
  } catch (error) {
    return error;
  }
}
