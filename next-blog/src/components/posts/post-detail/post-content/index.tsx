import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from "../post-header";

import styles from "./post-content.module.scss"

SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('js', js)

const PostContent: React.FC<Posts.PostContentProps> = ({ post }) => {
  const { title, image, slug, content } = post;

  const imageSrc = `/images/posts/${slug}/${image}`
  const customMarkdown = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt || ''}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          children={children}
        />
      );
    }
  }

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imageSrc} />

      <ReactMarkdown components={customMarkdown}>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;
