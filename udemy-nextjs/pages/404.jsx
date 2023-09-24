import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page Not Found</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </main>
  );
}
