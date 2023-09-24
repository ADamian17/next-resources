import type { NextApiRequest, NextApiResponse } from 'next';
import { InsertOneResult, MongoClient, ObjectId } from 'mongodb';

import { insertDocument, mongodbConnect } from '@/services/mongodb.config';

interface NextApiReq extends NextApiRequest {
  body: {
    email: string;
    message: string;
    name: string;
  };
}

const handler = async (req: NextApiReq, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const { email, message, name } = req.body;

      if (
        !email ||
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !message ||
        message.trim() === ''
      ) {
        res.status(422).json({ message: 'Invalid input' });
        return;
      }
      const client = (await mongodbConnect()) as MongoClient;

      const newMsg: Record<string, string | ObjectId> = {
        email,
        message,
        name,
      };

      const result = (await insertDocument({
        client,
        collection: 'messages',
        collectionData: newMsg,
      })) as InsertOneResult;

      newMsg.insertedId = result.insertedId;
      client.close();

      res.status(201).json({ message: 'Success!', data: newMsg });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default handler;
