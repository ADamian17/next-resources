import Head from 'next/head';
import { getFeaturedEvents } from '../utils';
import EventsList from '../components/events/events-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

const HomePage = (props) => (
  <>
    <Head>
      <title>Next Events</title>
      <meta name="description" content="Find your events" />
    </Head>

    <NewsletterRegistration />
    <EventsList items={props?.events || []} />
  </>
);

export default HomePage;

export const getStaticProps = async () => {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
};
