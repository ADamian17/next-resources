import fs from 'fs/promises';
import path from 'path';
import { ProjectsType } from '@/types';

export default async function getProjectsData() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const res = await fs.readFile(filePath);
  const data: { projects: ProjectsType } = JSON.parse(res.toString());

  return data;
}
