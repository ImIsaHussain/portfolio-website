import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/InitialLoader.module.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import cursorSounds from '../../config/cursorSounds';

function InitialLoader({ isActive }) {
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(true);
  const currentValue = useRef(0);
  const loaderRef = useRef(null);
  const { initializeAudio } = useAudioPlayer(cursorSounds);

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
        }, 10);
      }, delay);
    });

    const runAnimation = async () => {
      // Initialize audio at the start
      initializeAudio();

      await animateToNumber(0, 200);
      await animateToNumber(37, 0);
      await animateToNumber(98, 200);
      await animateToNumber(100, 100);

      // wait at 100 for 2 seconds
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });

      // Start fade out
      if (loaderElement) {
        loaderElement.style.setProperty('--opacity', '0');
      }
      // Wait for fade out animation to complete before hiding
      setTimeout(() => {
        setVisible(false);
      }, 1000);
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
  }, [isActive, initializeAudio]);

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
