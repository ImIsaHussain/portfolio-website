import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/InitialLoader.module.css';

function InitialLoader({ isActive }) {
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(true);
  const currentValue = useRef(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!isActive) return undefined;

    const loaderElement = loaderRef.current;

    const animateToNumber = (target, delay) => new Promise((resolve) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          if (currentValue.current < target) {
            currentValue.current += 1;
            setPercentage(currentValue.current);
            if (loaderElement) {
              loaderElement.style.setProperty('--progress', `${currentValue.current}%`);
            }
          } else {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      }, delay);
    });

    const runAnimation = async () => {
      await animateToNumber(0, 300);
      await animateToNumber(37, 0);
      await animateToNumber(98, 300);
      await animateToNumber(100, 200);

      // Start fade out
      if (loaderElement) {
        loaderElement.style.setProperty('--opacity', '0');
      }
      // Wait for fade out animation to complete before hiding
      setTimeout(() => {
        setVisible(false);
      }, 500);
    };

    runAnimation();

    return () => {
      currentValue.current = 0;
      setPercentage(0);
      setVisible(true);
      if (loaderElement) {
        loaderElement.style.setProperty('--progress', '0%');
        loaderElement.style.setProperty('--opacity', '1');
      }
    };
  }, [isActive]);

  if (!isActive || !visible) return null;

  return (
    <div ref={loaderRef} className={styles.initialLoader}>
      <div className={styles.content}>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
    </div>
  );
}

InitialLoader.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default InitialLoader;
