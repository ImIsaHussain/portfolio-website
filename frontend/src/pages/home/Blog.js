import React from 'react';
import Styles from '../../styles/pages/Blog.module.css';

function Blog() {
  return (
    <section className={Styles.section}>
      <h2>Latest Blog Posts</h2>
      <div className={Styles.blogPosts}>
        <article className={Styles.blogCard}>
          <h3>Blog Post Title 1</h3>
          <p>A brief preview of the first blog post content...</p>
          <span>Read More →</span>
        </article>
        <article className={Styles.blogCard}>
          <h3>Blog Post Title 2</h3>
          <p>A brief preview of the second blog post content...</p>
          <span>Read More →</span>
        </article>
      </div>
    </section>
  );
}

export default Blog;
