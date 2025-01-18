import React, { useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import ContactRedirect from './ContactRedirect';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Styles from '../../styles/pages/Home.module.css';

function Home() {
  const containerRef = useRef(null);
  const sectionsRef = useRef(null);

  // Use the infinite scroll hook
  useInfiniteScroll(containerRef, sectionsRef);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container} ref={containerRef}>
        <div className={Styles.sections} ref={sectionsRef}>
          <div className={Styles.section}><Hero /></div>
          <div className={Styles.section}><About /></div>
          <div className={Styles.section}><Projects /></div>
          <div className={Styles.section}><Blog /></div>
          <div className={Styles.section}><ContactRedirect /></div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
