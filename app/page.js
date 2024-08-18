// /app/page.js

'use client';

import { useState } from 'react';
import Bell from './components/Bell';
import NumberScreen from './components/NumberScreen';

export default function Home() {
  const [showNumber, setShowNumber] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRing = () => {
    const audio = new Audio('/doorbell.mp3');
    audio.play();

    setRandomNumber(Math.floor(Math.random() * 10) + 1);

    setTimeout(() => {
      setShowNumber(true);
    }, 1000); // Nach einer Sekunde zur nächsten Seite wechseln
  };

  const handleBack = () => {
    setShowNumber(false);
  };

  return (
    <main>
      {showNumber ? <NumberScreen number={randomNumber} onBack={handleBack} /> : <Bell onRing={handleRing} />}
    </main>
  );
}
