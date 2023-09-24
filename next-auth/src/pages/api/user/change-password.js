import { hasPassword, verifyPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db.config';
import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
  if (req.method !== 'PATCH') return;

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'not authenticated' });
    return;
  }

  const userEmail = session.user.email;
  const newPassword = req.body.newPassword;
  const oldPassword = req.body.oldPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const foundUser = await usersCollection.findOne({ email: userEmail });

  if (!foundUser) {
    client.close();
    return res.status(404).json({ message: 'User not found.' });
  }

  const currentPassword = foundUser.password;
  const isValidPassword = await verifyPassword(oldPassword, currentPassword);

  if (!isValidPassword) {
    client.close();
    return res.status(403).json({ message: `Passwords don't match` });
  }
  const hashedPassword = await hasPassword(newPassword);

  await usersCollection.updateOne(
    { email: userEmail },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );

  client.close();
  return res.status(200).json({ message: `Password updated` });
};

export default handler;
