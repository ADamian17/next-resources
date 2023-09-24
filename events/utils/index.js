export const apiUrl =
  'https://track-that-job-default-rtdb.firebaseio.com/events.json';

export async function getAllEvents() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  return Object.values(data);
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();

  if (!events) return [];

  const hasIsFeatured = events?.every((event) => 'isFeatured' in event);

  if (!hasIsFeatured) return [];

  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export async function setEventsStaticPaths() {
  const data = await getFeaturedEvents();
  return data.map((event) => ({ params: { eventId: event.id } }));
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  return events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
