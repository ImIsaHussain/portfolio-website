import { useState, useCallback } from 'react';

function useAudioPlayer(sounds) {
  const [audioPlayers, setAudioPlayers] = useState({});
  const [audioInitialized, setAudioInitialized] = useState(false);

  const initializeAudio = useCallback(() => {
    if (!audioInitialized) {
      const players = {};
      Object.entries(sounds).forEach(([key, soundPath]) => {
        players[key] = new Audio(soundPath);
      });
      setAudioPlayers(players);
      setAudioInitialized(true);
    }
  }, [sounds, audioInitialized]);

  const playSound = useCallback((type) => {
    if (!audioInitialized) return;
    const audio = audioPlayers[type];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, [audioPlayers, audioInitialized]);

  return {
    playSound,
    initializeAudio
  };
}

export default useAudioPlayer;
