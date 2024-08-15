// /app/page.js

'use client';

import { useState } from 'react';
import Bell from './components/Bell';
import NumberScreen from './components/NumberScreen';

export default function Home() {
  const [showNumber, setShowNumber] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRing = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setShowNumber(true);
  };

  const handleBack = () => {
    setShowNumber(false);
  };

  return <>{showNumber ? <NumberScreen number={randomNumber} onBack={handleBack} /> : <Bell onRing={handleRing} />}</>;
}
