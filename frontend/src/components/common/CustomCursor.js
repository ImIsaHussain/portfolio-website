import React, { useEffect } from 'react';
import styles from '../../styles/components/CustomCursor.module.css';
import useCursorPosition from '../../hooks/useCursorPosition';
import useCursorInteraction from '../../hooks/useCursorInteraction';
import cursorSounds from '../../config/cursorSounds';

function CustomCursor() {
  const position = useCursorPosition();
  const { isHovering, clicked, currentElement } = useCursorInteraction(cursorSounds);

  useEffect(() => {
    // Hide the default cursor on the html element to ensure it's hidden everywhere
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    return () => {
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  const getCursorClass = () => {
    const classes = [styles.customCursor];
    if (isHovering) classes.push(styles.hover);
    if (clicked) classes.push(styles.clicked);
    if (currentElement) classes.push(styles[`type_${currentElement}`]);
    return classes.join(' ');
  };

  const cursorStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    willChange: 'transform',
  };

  return (
    <>
      <div className={getCursorClass()} style={cursorStyle} />
      <div className={`${styles.customCursorDot} ${clicked ? styles.clicked : ''}`} style={cursorStyle} />
    </>
  );
}

export default CustomCursor;
