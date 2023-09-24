import Button from '../ui/button';
import Image from 'next/image';
import styles from './event-item.module.css';

export default function EventsItem(props) {
  const { title, image, date, location, id } = props;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt="event image" width={250} height={160} />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>

          <div className={styles.date}>
            <svg>
              <use href="/icons/main-icons.svg#date-icon"></use>
            </svg>
            <time>{formatedDate}</time>
          </div>

          <div className={styles.address}>
            <svg>
              <use href="/icons/main-icons.svg#address-icon"></use>
            </svg>
            <address>{formatedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Events</span>
            <span className={styles.icon}>
              <svg>
                <use href="/icons/main-icons.svg#arrow-right-icon"></use>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
