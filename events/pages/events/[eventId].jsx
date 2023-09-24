import { getEventById, setEventsStaticPaths } from '../../utils';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Head from 'next/head';
import Comments from '../../components/input/comments';

const EventDetailPage = (props) => {
  if (!props?.event) {
    return (
      <div className="center">
        <p>loading...</p>
      </div>
    );
  }

  const { event } = props;

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />

      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>

      <Comments eventId={event.id} />
    </>
  );
};

export default EventDetailPage;

export const getStaticPaths = async () => {
  const paths = await setEventsStaticPaths();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const eid = params.eventId;
  const event = await getEventById(eid);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};
