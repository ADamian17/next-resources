import { GetStaticPaths, GetStaticProps } from "next";
import { ProjectType } from "@/types";
import getProjectsData from "@/utils/getProjectsData";

type ProjectProps = {
  project: ProjectType
}

const ProjectDetailPage: React.FC<ProjectProps> = ({ project }) => {
  if (!project) {
    return <p>loading...</p>
  }

  return (
    <main>
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
    </main>
  )
}

export default ProjectDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProjectsData()
  const paths = data.projects.map(project => ({ params: { pid: project.id } }));

  return {
    paths,
    fallback: true, // we don't have to predefined all our routes
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const pid = params?.pid;

  const data = await getProjectsData();
  const project = data.projects.find(project => project.id === pid);

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    },
  }
}