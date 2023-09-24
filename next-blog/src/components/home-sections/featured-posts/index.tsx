import React from "react";

import styles from "./featured-posts.module.scss";
import PostsGrid from "@/components/posts/posts-grid";

type FeaturesPostsType = {};

const FeaturedPosts: React.FC<FeaturesPostsType & Posts.PostsGridProps> = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>

      <PostsGrid posts={posts} />
    </section>
  )
};

export default FeaturedPosts;