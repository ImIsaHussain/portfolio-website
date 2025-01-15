import React from 'react';
import Styles from '../../styles/pages/Projects.module.css';

function Projects() {
  return (
    <section className={Styles.section}>
      <h2>Featured Projects</h2>
      <div className={Styles.projectGrid}>
        <div className={Styles.projectCard}>
          <h3>Project 1</h3>
          <p>A brief description of the first project and its key features.</p>
        </div>
        <div className={Styles.projectCard}>
          <h3>Project 2</h3>
          <p>A brief description of the second project and its key features.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
