import React from 'react';
import Styles from '../../styles/pages/About.module.css';

function About() {
  return (
    <section className={Styles.section}>
      <h2>About Me</h2>
      <p>
        A passionate developer with a love for creating beautiful and
        functional web applications.
      </p>
      <div className={Styles.skills}>
        <div>React</div>
        <div>JavaScript</div>
        <div>Node.js</div>
        <div>CSS</div>
      </div>
    </section>
  );
}

export default About;
