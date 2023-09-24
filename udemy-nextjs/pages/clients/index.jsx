import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    {
      id: 'adonis',
      name: 'Adonis',
    },
    {
      id: 'damian',
      name: 'Damian',
    },
  ];

  return (
    <main>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}

        <li>
          <Link
            href={{
              pathname: '/clients/[id]',
              query: {
                id: 'other',
              },
            }}
          >
            example with obj
          </Link>
        </li>
      </ul>
    </main>
  );
}
