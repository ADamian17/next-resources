import { GetStaticProps } from "next";
import Link from "next/link";
import getProjectsData from "@/utils/getProjectsData";

type HomeProps = {
  projects: { id: string, title: string, description: string }[]
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <ul>
      {
        projects && projects.map(project => (
          <li key={project?.id}>
            <Link href={`/${project?.id}`}>
              {project?.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  console.log("(Re-)Generating...");

  const data = await getProjectsData();

  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/no-data"
  //     }
  //   }
  // }

  return {
    props: {
      projects: data.projects
    },
    revalidate: 10, // after 10 second pages will regenerate, use in incremental generation
  }
}
