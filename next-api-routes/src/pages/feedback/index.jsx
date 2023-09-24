import { generatePath, getFeedbackData } from '@/utils';
import { useState } from 'react';

export default function Home({ feedbackData }) {
  const [feedbackDetails, setFeedbackDetails] = useState(null);

  const handleSHowDetails = async (e) => {
    const { id } = e.currentTarget;
    const data = await (await fetch(`/api/feedback/${id}`)).json();

    if (data) {
      setFeedbackDetails(data);
    }
  };

  return (
    <main style={{ display: 'flex', columnGap: 25 }}>
      <ul>
        <h1>Feedback</h1>
        {feedbackData &&
          feedbackData.map((item) => (
            <li key={item.id} id={item.id} onClick={handleSHowDetails}>
              <p style={{ pointerEvents: 'none' }}>{item.email}</p>
              <button>Show Details</button>
            </li>
          ))}
      </ul>

      <div>
        {feedbackDetails && (
          <>
            <p>{feedbackDetails?.email}</p>
            <p>{feedbackDetails.feedback}</p>
          </>
        )}
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const filePath = generatePath();
  const feedbackData = Object.values(getFeedbackData(filePath));

  return {
    props: {
      feedbackData,
    },
  };
};
