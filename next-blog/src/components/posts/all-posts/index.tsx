import PostsGrid from '../posts-grid';

import styles from './all-posts.module.scss';

const AllPosts: React.FC<Posts.PostsGridProps> = ({ posts }) => (
  <section className={styles.posts}>
    <h1>All Posts</h1>

    <PostsGrid posts={posts} />
  </section>
)

export default AllPosts
