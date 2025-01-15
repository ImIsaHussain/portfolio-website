import { useState, useEffect } from 'react';
import useAudioPlayer from './useAudioPlayer';
import { isInteractiveElement } from '../utils/domUtils';

function useCursorInteraction(sounds) {
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const { playSound, initializeAudio } = useAudioPlayer(sounds);

  useEffect(() => {
    const onMouseOver = (e) => {
      if (isInteractiveElement(e.target)) {
        const elementType = e.target.dataset.cursorType || 'default';
        setIsHovering(true);
        setCurrentElement(elementType);
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
      setCurrentElement(null);
    };

    const onMouseClick = (e) => {
      if (!isInteractiveElement(e.target)) return;

      initializeAudio();
      const elementType = e.target.dataset.cursorType || 'default';
      playSound(`click_${elementType}`);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 150);
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('click', onMouseClick);

    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('click', onMouseClick);
    };
  }, [playSound, initializeAudio]);

  return {
    isHovering,
    clicked,
    currentElement
  };
}

export default useCursorInteraction;
