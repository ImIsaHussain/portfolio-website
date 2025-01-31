import React from 'react';
import Styles from '../styles/pages/Projects.module.css';

function Projects() {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <p className={Styles.title}>404</p>
        <p className={Styles.subtitle}>Projects Loading...</p>
        <p className={Styles.message}>
          Oops! Looks like my projects are still compiling...<br />
          Just kidding! I&apos;m in the process of importing my coolest
          projects from my local branch to production. Stay tuned!
        </p>
      </section>
    </div>
  );
}

export default Projects;
