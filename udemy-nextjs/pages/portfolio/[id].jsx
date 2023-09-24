import { useRouter } from 'next/router';

export default function PortfolioSingle() {
  const { pathname, query } = useRouter();
  /* router.query  return the dynamic value encode in the filename*/
  console.log(pathname, query.id);

  return (
    <main>
      <h1>The Portfolio Single</h1>
    </main>
  );
}
