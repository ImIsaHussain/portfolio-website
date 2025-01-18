import React from 'react';
import Styles from '../styles/pages/About.module.css';

function About() {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <h1 className={Styles.title}>About Me</h1>
        <p className={Styles.subtitle}>Full Stack Developer & Tech Enthusiast</p>
      </section>

      <section className={Styles.content}>
        <div className={Styles.section}>
          <h2>Background</h2>
          <p>
            Hi there! I&apos;m a passionate developer who loves creating
            intuitive and engaging web experiences.
            With a strong foundation in both front-end and back-end
            development, I enjoy bringing ideas to life
            through clean code and modern design principles.
          </p>
        </div>

        <div className={Styles.section}>
          <h2>Technical Skills</h2>
          <div className={Styles.skillsGrid}>
            <div className={Styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            <div className={Styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className={Styles.skillCategory}>
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={Styles.section}>
          <h2>What I Do</h2>
          <p>
            I specialize in building modern web applications with a focus on performance,
            accessibility, and user experience. Whether it&apos;s crafting responsive interfaces,
            optimizing database queries, or deploying scalable solutions, I&apos;m always excited
            to tackle new challenges and learn along the way.
          </p>
        </div>

        <div className={Styles.section}>
          <h2>Interests</h2>
          <p>
            Beyond coding, I&apos;m passionate about technology, design, and continuous learning.
            I enjoy staying up-to-date with the latest web development trends and best practices.
            When I&apos;m not coding, you might find me experimenting with new technologies or
            contributing to open-source projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
