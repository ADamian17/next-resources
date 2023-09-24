import EventsItem from './event-item';

import styles from './event-list.module.css';

export default function EventsList({ items }) {
  return (
    <ul className={styles.list}>
      {items &&
        items.map((event) => (
          <EventsItem
            date={event.date}
            id={event.id}
            image={event.image}
            key={event.id}
            location={event.location}
            title={event.title}
          />
        ))}
    </ul>
  );
}
