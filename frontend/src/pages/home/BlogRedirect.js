import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../../styles/pages/BlogRedirect.module.css';

function BlogRedirect({ onNavigate }) {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>WORD ON THE STREET</h2>
      <div className={Styles.blogPosts}>
        <article className={Styles.blogCard}>
          <p className={Styles.postTitle}>Blog Post Title 1</p>
          <p className={Styles.postContent}>A brief preview of the first blog post content...</p>
          <Link to="/blog" data-click-type="primary" onClick={handleClick('/blog')} className={Styles.readMore}>
            Read More
          </Link>
        </article>
      </div>
    </section>
  );
}

BlogRedirect.propTypes = {
  onNavigate: PropTypes.func,
};

BlogRedirect.defaultProps = {
  onNavigate: null,
};

export default BlogRedirect;
