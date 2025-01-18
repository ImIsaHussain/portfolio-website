import { useState, useEffect } from 'react';

function useCursorPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let x = 0;
    let y = 0;

    const handleMouseMove = (e) => {
      // Check if we're using pointer lock
      if (document.pointerLockElement) {
        // Use movement values for pointer lock
        x = Math.max(0, Math.min(window.innerWidth, x + e.movementX));
        y = Math.max(0, Math.min(window.innerHeight, y + e.movementY));
      } else {
        // Fall back to regular coordinates
        x = e.clientX;
        y = e.clientY;
      }

      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}

export default useCursorPosition;
