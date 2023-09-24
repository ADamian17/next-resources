import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirPath = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDirPath);

export const rmFileExtension = (fileName: string) => {
  return fileName.replace(/\.md$/, '');
};

export function getPostData(fileName: string) {
  const slug = rmFileExtension(fileName);
  const filePath = path.join(postsDirPath, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    ...(data as Posts.Post),
    slug,
    content,
  };

  return postData;
}

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((file) => getPostData(file));

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
};
