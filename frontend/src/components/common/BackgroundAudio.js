import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundMusic from '../../assets/sounds/TheReservoir.mp3';
import styles from '../../styles/components/BackgroundAudio.module.css';

function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('audioMuted');
    return saved ? JSON.parse(saved) : true;
  });
  const audioRef = useRef(null);
  const location = useLocation();

  const fadeVolume = (from, to, duration) => {
    const audio = audioRef.current;
    if (!audio) return;

    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const volumeChange = (to - from) / steps;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
      currentStep += 1;
      audio.volume = from + volumeChange * currentStep;

      if (currentStep >= steps) {
        audio.volume = to;
        clearInterval(fadeInterval);
      }
    }, interval);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0;
    audio.preload = 'auto';

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('audioMuted', JSON.stringify(isMuted));
  }, [isMuted]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (!newMutedState) {
      try {
        await audio.play();
        fadeVolume(0.05, 0.3, 5000);
      } catch (error) {
        setIsMuted(true);
      }
    } else {
      fadeVolume(audio.volume, 0, 2000);
      setTimeout(() => {
        audio.pause();
      }, 2000);
    }
  };

  if (location.pathname === '/loading') {
    return null;
  }

  return (
    <div className={styles.backgroundAudioContainer}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />
      <input
        id="audioToggle"
        type="checkbox"
        checked={isMuted}
        onChange={toggleAudio}
        className={styles.checkboxInput}
        aria-label="Toggle background music"
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={styles.toggleSwitch}
        htmlFor="audioToggle"
        aria-hidden="true"
      >
        <div className={styles.speaker}>
          <svg viewBox="0 0 75 75" version="1.0" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ stroke: 'var(--text-primary)', strokeWidth: 5, strokeLinejoin: 'round', fill: 'var(--text-primary)' }}
              d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
            />
            <path
              style={{ fill: 'none', stroke: 'var(--text-primary)', strokeWidth: 5, strokeLinecap: 'round' }}
              d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
            />
          </svg>
        </div>

        <div className={styles.muteSpeaker}>
          <svg viewBox="0 0 75 75" version="1.0">
            <path
              strokeWidth="5"
              stroke="#fff"
              strokeLinejoin="round"
              fill="#fff"
              d="m39,14-17,15H6V48H22l17,15z"
            />
            <path
              strokeWidth="5"
              stroke="#fff"
              strokeLinecap="round"
              fill="#fff"
              d="m49,26 20,24m0-24-20,24"
            />
          </svg>
        </div>
      </label>
    </div>
  );
}

export default BackgroundAudio;
