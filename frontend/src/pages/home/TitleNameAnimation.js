import React, { useEffect, useRef } from 'react';
import Styles from '../../styles/pages/Hero.module.css';
import useInitialLoader from '../../hooks/useInitialLoader';

function TitleNameAnimation() {
  const letterRefs = useRef([]);
  const { isInitialLoad } = useInitialLoader();

  useEffect(() => {
    const showLetters = (elements, staggered = false) => {
      elements.forEach((letterElement, index) => {
        if (!letterElement) return;

        const applyStyles = () => {
          const element = letterElement.style;
          element.opacity = '1';
          element.transform = 'translate(0, 0) scale(1, 1)';
        };

        if (staggered) {
          // Add a rough bounce effect with varied timing
          setTimeout(() => {
            const element = letterElement.style;
            element.opacity = '1';
            element.transform = 'translate(0, -10px) scale(1.8, 0.4)';

            setTimeout(() => {
              element.transform = 'translate(0, 5px) scale(0.7, 1.4)';

              setTimeout(() => {
                element.transform = 'translate(0, -3px) scale(1.1, 0.9)';

                setTimeout(() => {
                  element.transform = 'translate(0, 0) scale(1, 1)';
                }, 80);
              }, 100);
            }, 120);
          }, index * 150);
        } else {
          applyStyles();
        }
      });
    };

    if (!isInitialLoad) {
      // If not initial load, show letters immediately
      showLetters(letterRefs.current);
      return undefined;
    }

    // On initial load, animate letters after 3 seconds
    const timeout = setTimeout(() => {
      showLetters(letterRefs.current, true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [isInitialLoad]);

  const letters = 'ISA HUSSAIN'.split('').map((letter, index) => ({
    char: letter,
    id: `${letter}-${index}-${letter.charCodeAt(0)}`
  }));

  return (
    <div className={Styles.title}>
      {letters.map((letterObj, index) => (
        <span
          key={letterObj.id}
          ref={el => {
            letterRefs.current[index] = el;
          }}
          className={Styles.letter}
        >
          {letterObj.char === ' ' ? '\u00A0' : letterObj.char}
        </span>
      ))}
    </div>
  );
}

export default TitleNameAnimation;
