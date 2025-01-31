import React from 'react';
import Styles from '../styles/pages/Blog.module.css';

function Blog() {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <p className={Styles.title}>404</p>
        <p className={Styles.subtitle}>Blog Coming Soon</p>
        <p className={Styles.message}>
          Clearly I don&apos;t have anything interesting to say just yet...<br />
          Don&apos;t worry, I am still working on creating
          amazing content for you to read. Check back later!
        </p>
      </section>
    </div>
  );
}

export default Blog;
