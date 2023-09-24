import { verifyPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db.config';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      authorize: async (credentials) => {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');
        const foundUser = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!foundUser) {
          client.close();
          throw new Error('No user found');
        }

        const isValidPassword = await verifyPassword(
          credentials.password,
          foundUser.password
        );

        if (!isValidPassword) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();

        return {
          email: foundUser.email,
        };
      },
    }),
  ],
});
