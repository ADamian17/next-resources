import { useRouter } from 'next/router';

export default function Project() {
  const { pathname, query } = useRouter();
  /* router.query  return the dynamic value encode in the filename*/
  console.log(query?.projectId);

  return (
    <main>
      <h1>The Project</h1>
    </main>
  );
}
