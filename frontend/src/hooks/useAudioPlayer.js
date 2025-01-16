import { useState, useCallback, useRef } from 'react';

function useAudioPlayer(sounds) {
  const [audioInitialized, setAudioInitialized] = useState(false);
  const audioPlayersRef = useRef({});

  const initializeAudio = useCallback(() => {
    if (!audioInitialized) {
      Object.entries(sounds).forEach(([key, soundPath]) => {
        const audio = new Audio(soundPath);
        // Preload the audio
        audio.load();
        audioPlayersRef.current[key] = audio;
      });
      setAudioInitialized(true);
    }
  }, [sounds, audioInitialized]);

  const playSound = useCallback((type) => {
    const audio = audioPlayersRef.current[type];
    if (audio) {
      audio.currentTime = 0;
      // Create and play a new instance to handle rapid clicks
      const newAudio = audio.cloneNode();
      newAudio.play().catch(() => {});
    }
  }, []);

  return {
    playSound,
    initializeAudio
  };
}

export default useAudioPlayer;
