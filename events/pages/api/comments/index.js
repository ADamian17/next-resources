import { mongodbConnect } from '../../../services/mongodb.config';

export default async function handler(req, res) {
  const client = await mongodbConnect();
  const eventId = req.query.eventId;

  try {
    const db = client.db();

    if (req.method === 'POST') {
      const { email, name, text } = req.body;
      if (
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === ''
      ) {
        res.status(422).json({ msg: 'Invalid data' });
        return;
      }

      const newComment = {
        ...req.body,
      };

      const res = await db.collection('comments').insertOne(newComment);
      newComment._id = res.insertedId;
      return res.status(201).json(newComment);
    }

    if (req.method === 'GET') {
      const comments = await db
        .collection('comments')
        .find({ eventId })
        .sort({ _id: -1 })
        .toArray();

      return res.status(200).json({ eventId, comments });
    }
  } catch (error) {
    return res.json(error);
  } finally {
    client.close();
  }
}
