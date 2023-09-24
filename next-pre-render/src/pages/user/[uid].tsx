import { GetServerSideProps } from "next";

const UserProfileDetailPage: React.FC = (props) => {
  return (
    <main>
      <h1>User Profile Server Side</h1>
    </main>
  )
}

export default UserProfileDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const usrId = params?.uid;

  return {
    props: {
      id: `userid-${usrId}`
    }
  }
}