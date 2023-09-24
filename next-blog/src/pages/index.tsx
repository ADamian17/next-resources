import { GetStaticProps } from "next";

import { getFeaturedPosts } from "@/helpers/posts-utils";
import FeaturedPosts from "@/components/home-sections/featured-posts";
import Hero from "@/components/home-sections/Hero";
import Head from "next/head";

const HomePage: React.FC<Posts.PostsGridProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Adonis Blog</title>

        <meta name="description" content="I post about programming and web development." />
      </Head>

      <Hero />

      <FeaturedPosts posts={posts} />
    </>
  )
}

export default HomePage;

export const getStaticProps: GetStaticProps<Posts.PostsGridProps> = async () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts
    }
  }
}
