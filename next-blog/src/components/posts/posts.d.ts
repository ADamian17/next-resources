declare namespace Posts {
  type Post = {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
    content: string;
    isFeatured: boolean;
  };

  type PostItemProps = {
    post: Omit<Post, 'content'>;
  };

  type PostContentProps = {
    post: Omit<Post, 'excerpt' | 'isFeatured'>;
  };

  type PostsGridProps = {
    posts: Omit<Post, 'content'>[];
  };

  type PostHeaderProps = Pick<Post, 'title' | 'image'>;
}
