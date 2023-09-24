import { insertDocument, mongodbConnect } from '../../services/mongodb.config';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(422).json({ msg: 'Invalid email address' });
    }

    const client = await mongodbConnect();

    await insertDocument({
      client,
      collection: 'emails',
      collectionData: { email },
    });

    client.close();

    return res.status(201).json({ email });
  }
}
