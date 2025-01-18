import React, { useEffect, useRef } from 'react';
import Styles from '../../styles/pages/About.module.css';
import profileImage from '../../assets/images/IsaNight.png';

function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && textRef.current) {
          textRef.current.classList.add(Styles.fadeIn);
          textObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imageRef.current) {
          // Remove the class
          imageRef.current.classList.remove(Styles.slideIn);
          // Force a reflow by accessing offsetHeight
          imageRef.current.getBoundingClientRect();
          // Add the class back
          imageRef.current.classList.add(Styles.slideIn);
          imageObserver.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      textObserver.observe(sectionRef.current);
      imageObserver.observe(sectionRef.current);
    }

    return () => {
      textObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={Styles.section}>
      <div className={Styles.content}>
        <div ref={textRef} className={Styles.textContent}>
          <p className={Styles.title}>WHO IS THIS DUDE?</p>
          <p className={Styles.description}>
            I&apos;m just a guy who is trying to make <accent>cool</accent> websites.
            <br />
          </p>
          <div className={Styles.skills}>
            <div>React</div>
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>Node.js</div>
            <div>Python</div>
            <div>AWS</div>
            <div>Docker</div>
            <div>GraphQL</div>
            <div>MongoDB</div>
            <div>PostgreSQL</div>
            <div>Redis</div>
            <div>Git</div>
          </div>
        </div>
      </div>
      <div className={Styles.imageContainer}>
        <img
          ref={imageRef}
          className={Styles.profileImage}
          src={profileImage}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default About;
