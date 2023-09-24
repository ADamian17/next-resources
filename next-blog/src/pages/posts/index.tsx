import { GetStaticProps } from "next";

import { getAllPosts } from "@/helpers/posts-utils";
import AllPosts from "@/components/posts/all-posts";
import Head from "next/head";

const PostsPage: React.FC<Posts.PostsGridProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Adonis Blog | Posts</title>

        <meta name="description" content="All posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
};

export default PostsPage;

export const getStaticProps: GetStaticProps<Posts.PostsGridProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts
    },
  }
}