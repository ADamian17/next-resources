import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>The Home Page</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </main>
  );
}
