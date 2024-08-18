// /app/components/NumberScreen.js

import styled from 'styled-components';

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const NumberDisplay = styled.div`
  font-size: 8rem;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: gray;
  }
`;

const NumberScreen = ({ number, onBack }) => {
  return (
    <ScreenWrapper>
      <NumberDisplay>{number}</NumberDisplay>
      <BackButton onClick={onBack}>Zurück</BackButton>
    </ScreenWrapper>
  );
};

export default NumberScreen;
