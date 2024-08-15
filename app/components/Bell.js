// /app/components/Bell.js
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const BellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const BellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BellHousing = styled.div`
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #d4af37 30%, #b8860b 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
`;

const BellKnob = styled.div`
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, #f4f4f4 40%, #b0b0b0 100%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: translate(-50%, -50%) translateY(8px);
  }
`;

const NameTag = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  color: #000080; /* Dunkelblau für die Handschrift */
  font-family: 'Indie Flower', cursive; /* Handschriftliche Schriftart */
  border: 2px solid #b0b0b0;
  border-radius: 5px;
  max-width: 250px;
  text-align: center;
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  /* Schrauben-Dekoration */
  &::before,
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #b0b0b0;
    position: absolute;
    top: -10px;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &::before {
    left: 10px;
  }

  &::after {
    right: 10px;
  }
`;

const Bell = ({ onRing }) => {
  const [isRinging, setIsRinging] = useState(false);

  const ringBell = () => {
    if (isRinging) return;
    setIsRinging(true);

    // Play sound
    const audio = new Audio('/doorbell.mp3'); // Gong-Sound hinzufügen
    audio.play();

    // Simuliere das Klingeln für 1 Sekunde
    setTimeout(() => {
      setIsRinging(false);
      onRing();
    }, 1000);
  };

  return (
    <BellWrapper>
      <BellContainer>
        <BellHousing>
          <BellKnob onClick={ringBell} />
        </BellHousing>
        <NameTag>Mr. & Mrs. Beepshow</NameTag>
      </BellContainer>
    </BellWrapper>
  );
};

export default Bell;
