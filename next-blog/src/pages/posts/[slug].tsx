import { GetStaticProps } from "next";

import { getPostData, getPostsFiles, rmFileExtension } from "@/helpers/posts-utils";
import PostContent from "@/components/posts/post-detail/post-content";
import Head from "next/head";

const PostPage: React.FC<Posts.PostContentProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Adonis Blog | {post?.title || ""}</title>
        <meta name="description" />
      </Head>

      {post && <PostContent post={post} />}
    </>
  )
}

export default PostPage;

export const getStaticPaths = async () => {
  const allPost = getPostsFiles()
  const paths = allPost.map(post => ({ params: { slug: rmFileExtension(post) } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Posts.PostContentProps> = async (context) => {
  const post = getPostData(context?.params?.slug as string)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post
    },
    revalidate: 600
  }
}