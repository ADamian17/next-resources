import React from "react";

import PostItem from "../post-item";

import styles from "./posts-grid.module.scss";

const PostsGrid: React.FC<Posts.PostsGridProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {
        posts.map(post => <PostItem key={post.slug} post={post} />)
      }
    </ul>
  )
};

export default PostsGrid;
