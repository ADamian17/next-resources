import React from "react";

import Image from "next/image";

import styles from "./Hero.module.scss";

const Hero: React.FC = (props) => (
  <section className={styles.hero}>
    <div className={styles.image}>
      <Image src="/images/hero/bg.jpg" alt="hero image" width={300} height={300} />
    </div>

    <h1>Hi, I'm Adonis</h1>

    <p>
      I blog about web development
    </p>
  </section>
)

export default Hero;