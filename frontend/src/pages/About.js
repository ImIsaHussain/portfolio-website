import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../styles/pages/About.module.css';

function About({ onNavigate }) {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <p className={Styles.title}>WHO IS THIS DUDE?</p>
        <p className={Styles.subtitle}>Frontend Developer, Tech Enthusiast,
          and just <span className={Styles.accent}>a chill dude</span>
        </p>
      </section>

      <section className={Styles.content}>
        <div className={Styles.section}>
          <h2>Background</h2>
          <p>
            Hi there! I&apos;m a passionate developer who loves creating
            intuitive and engaging web experiences.
            Building a strong foundation in front-end
            development, I enjoy bringing ideas to life.
            A lot of my work magically happens during sleep deprived nights. I enjoy what I do and I
            work hard to improve my skills every day.
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

        {/* <div className={Styles.section}>
          <h2>What I Do</h2>
          <p>
            I specialize in building modern web applications with a focus on performance,
            accessibility, and user experience. Whether it&apos;s crafting responsive interfaces,
            optimizing database queries, or deploying scalable solutions, I&apos;m always excited
            to tackle new challenges and learn along the way.
          </p>
        </div> */}

        <div className={Styles.section}>
          <h2>Interests</h2>
          <p>
            When I&apos;m not wrestling with CSS or
            debugging things that were working five minutes ago,
            I&apos;m out capturing moments, working on cool
            projects, and occasionally oversharing in blog posts.
          </p>
          <p>
            I wish I could tell you more about myself
            but that information is for my bestest of friends...
          </p>
          <p>
            So... what are you waiting for, an invite?!?
            Let&apos;s get to know each other a little bit more.
          </p>
          <Link to="/contact" className={Styles.link} onClick={handleClick('/contact')}>
            <div className={Styles.button} data-click-type="primary">
              Hit up my line.
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

About.propTypes = {
  onNavigate: PropTypes.func,
};

About.defaultProps = {
  onNavigate: null,
};

export default About;
