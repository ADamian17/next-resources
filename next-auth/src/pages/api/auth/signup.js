import { hasPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db.config';

async function handler(req, res) {
  if (req.method !== 'POST') return;

  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const hashedPassword = await hasPassword(password);
  const db = client.db();

  const isUser = await db.collection('users').findOne({
    email,
  });

  if (isUser) {
    res.status(422).json({ message: 'User exits already!' });
    client.close();
    return;
  }

  const result = await db.collection('users').insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
