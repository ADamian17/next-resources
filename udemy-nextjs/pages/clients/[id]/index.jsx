import { useRouter } from 'next/router';

export default function ClientProjects() {
  const { pathname, query, push } = useRouter();
  /* router.query  return the dynamic value encode in the filename*/
  console.log(pathname, query.id);

  return (
    <main>
      <h1>The Client Projects</h1>
    </main>
  );
}
