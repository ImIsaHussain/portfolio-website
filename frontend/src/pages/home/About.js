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
        if (entry.isIntersecting) {
          textRef.current.classList.add(Styles.visible);
          textObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
          <p className={Styles.title}>About Me</p>
          <p className={Styles.description}>
            A passionate developer with a love for creating beautiful and
            functional web applications.
          </p>
          <div className={Styles.skills}>
            <div>React</div>
            <div>JavaScript</div>
            <div>Node.js</div>
            <div>CSS</div>
          </div>
        </div>
        <div className={Styles.imageContainer}>
          <img
            ref={imageRef}
            src={profileImage}
            alt="Isa Hussain (ME!)"
            className={Styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
