import { useState, useEffect } from 'react';
import useAudioPlayer from './useAudioPlayer';
import { isInteractiveElement } from '../utils/domUtils';

function useCursorInteraction(sounds) {
  const [isHovering, setIsHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const { playSound, initializeAudio } = useAudioPlayer(sounds);

  useEffect(() => {
    // Initialize audio immediately when the hook mounts
    initializeAudio();
  }, [initializeAudio]);

  useEffect(() => {
    const onMouseOver = (e) => {
      if (isInteractiveElement(e.target)) {
        const { hoverType, cursorType = 'default' } = e.target.dataset;
        if (hoverType && sounds[`hover_${hoverType}`]) {
          playSound(`hover_${hoverType}`);
        }
        setIsHovering(true);
        setCurrentElement(cursorType);
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
      setCurrentElement(null);
    };

    const onMouseClick = (e) => {
      if (!isInteractiveElement(e.target)) return;

      const { clickType } = e.target.dataset;
      if (clickType && sounds[`click_${clickType}`]) {
        playSound(`click_${clickType}`);
      }
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
  }, [playSound, sounds]);

  return {
    isHovering,
    clicked,
    currentElement
  };
}

export default useCursorInteraction;
