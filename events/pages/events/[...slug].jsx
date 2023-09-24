import Head from 'next/head';
import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../utils';

export default function FilteredEventPage({ events, hasError, month, year }) {
  const head = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content="filter events" />
    </Head>
  );

  if (hasError) {
    return (
      <>
        {head}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        {head}
        <ErrorAlert>
          <p>No events founds for the chosen filter!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      {head}
      <ResultsTitle date={date} />

      <EventsList items={events} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const year = +params.slug[0];
  const month = +params.slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const events = await getFilteredEvents({
    year,
    month,
  });

  return {
    props: {
      events,
      month,
      year,
    },
  };
};
