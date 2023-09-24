import Image from 'next/legacy/image';

import styles from './post-header.module.scss';

const PostHeader: React.FC<Posts.PostHeaderProps> = ({ title, image }) => (
  <header className={styles.header}>
    <h1>{title}</h1>

    <Image src={image} alt={title} width={200} height={150} />
  </header>
)

export default PostHeader;