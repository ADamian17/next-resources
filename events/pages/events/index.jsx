import { useRouter } from 'next/router';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../data/events-data';
import Head from 'next/head';

export default function EventsPage({ events }) {
  const router = useRouter();

  const findEventsHandler = ({ selectedMonth, selectedYear }) => {
    const path = `/events/${selectedYear}/${selectedMonth}`;

    router.push(path);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find your events" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />

      <EventsList items={events} />
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
