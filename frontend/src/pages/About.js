import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../styles/pages/About.module.css';
import img1 from '../assets/images/DSC06144.jpg';
import img2 from '../assets/images/DSC06301 2.jpg';
import img3 from '../assets/images/DSC06353 2.jpg';
import img4 from '../assets/images/DSC06773 2.jpg';
import img5 from '../assets/images/DSC08485.jpg';
import img6 from '../assets/images/IMG_3130.jpg';
import img7 from '../assets/images/DSC06445.JPG';
import img8 from '../assets/images/DSC08080.JPG';
import img9 from '../assets/images/IsaHiking.jpg';
import img10 from '../assets/images/DSC06865.jpg';

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

      <div className={Styles.contentWrapper}>
        <div className={Styles.imageGalleryLeft}>
          <img src={img3} alt="Isa 1" className={`${Styles.galleryImage} ${Styles.leftImage1}`} />
          <img src={img9} alt="Isa 2" className={`${Styles.galleryImage} ${Styles.leftImage2}`} />
          <img src={img1} alt="Isa 3" className={`${Styles.galleryImage} ${Styles.leftImage3}`} />
          <img src={img6} alt="Isa 4" className={`${Styles.galleryImage} ${Styles.leftImage4}`} />
          <img src={img5} alt="Isa 5" className={`${Styles.galleryImage} ${Styles.leftImage5}`} />
        </div>

        <div className={Styles.mainContent}>
          <section className={Styles.content}>
            <div className={Styles.section}>
              <h2>Background</h2>
              <p>
                Hi there! I&apos;m a passionate developer who loves creating
                intuitive and engaging web experiences.
                Building a strong foundation
                in <span className={Styles.accent}>front-end development</span>,
                I enjoy bringing ideas to life.
                A lot of my work
                magically happens during sleep deprived nights. I enjoy what I do and I
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
                accessibility, and user experience. Whether it&apos;s
                crafting responsive interfaces,
                optimizing database queries, or deploying
                scalable solutions, I&apos;m always excited
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
                So... <span className={Styles.accent}>what are you waiting for</span>, an invite?!?
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

        <div className={Styles.imageGalleryRight}>
          <p className={Styles.hoverText}>hover over<br />me!</p>
          <img src={img4} alt="Isa 4" className={`${Styles.galleryImage} ${Styles.rightImage1}`} />
          <img src={img8} alt="Isa 5" className={`${Styles.galleryImage} ${Styles.rightImage2}`} />
          <img src={img7} alt="Isa 6" className={`${Styles.galleryImage} ${Styles.rightImage3}`} />
          <img src={img10} alt="Isa 7" className={`${Styles.galleryImage} ${Styles.rightImage4}`} />
          <img src={img2} alt="Isa 8" className={`${Styles.galleryImage} ${Styles.rightImage5}`} />
        </div>
      </div>
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
