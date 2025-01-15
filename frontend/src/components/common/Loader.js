// src/components/common/Loader.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/Loader.module.css';

function Loader({ isActive }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      setShouldRender(true);
    } else {
      // Wait for fade out animation
      timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isActive]);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.loaderOverlay} ${!isActive ? styles.fadeOut : ''}`}>
      <svg
        className={styles.scribbleLoader}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="rgb(255, 0, 0)"
      >
        <path
          className={styles.scribblePath}
          d="M120,0
             L-20,20
             L120,40
             L-20,60
             L120,80
             L-20,100"
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

Loader.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Loader;
