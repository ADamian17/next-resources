import Image from "next/legacy/image"
import Link from "next/link"

import styles from './post-item.module.scss'

const PostItem: React.FC<Posts.PostItemProps> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: 'long',
    year: "numeric",
  });

  const imageSrc = `/images/posts/${slug}/${image}`
  const linkHref = `/posts/${slug}`

  return (
    <li className={styles.post}>
      <Link href={linkHref}>
        <div className={styles.image}>
          <Image src={imageSrc} alt={title} width={300} height={200} layout="responsive" />
        </div>

        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem