import React from 'react';
import styles from '../../styles/components/CustomCursor.module.css';
import useCursorPosition from '../../hooks/useCursorPosition';
import useCursorInteraction from '../../hooks/useCursorInteraction';
import cursorSounds from '../../config/cursorSounds';

function CustomCursor() {
  const position = useCursorPosition();
  const { isHovering, clicked, currentElement } = useCursorInteraction(cursorSounds);

  const getCursorClass = () => {
    const classes = [styles.customCursor];
    if (isHovering) classes.push(styles.hover);
    if (clicked) classes.push(styles.clicked);
    if (currentElement) classes.push(styles[`type_${currentElement}`]);
    return classes.join(' ');
  };

  return (
    <div
      className={getCursorClass()}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: 'transform'
      }}
    />
  );
}

export default CustomCursor;
