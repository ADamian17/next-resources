import { GetServerSideProps } from "next";

const UserProfilePage: React.FC<{ username: string }> = ({ username }) => {
  return (
    <main>
      <h1>{username}</h1>
    </main>
  )
}

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, params } = context;
  console.log('server side code');

  return {
    props: {
      username: 'Adonis'
    }
  }
}