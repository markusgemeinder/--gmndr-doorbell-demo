// /app/components/Bell.js

import styled from 'styled-components';

const BellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const BellButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border: 2px solid #8f9092;
  box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1, inset 0 0 3px 0 #cecfd1;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #606060;
  text-shadow: 0 1px #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }
`;

const Bell = ({ onRing }) => {
  return (
    <BellWrapper>
      <BellButton onClick={onRing}>Mr. & Mrs. Beepshow</BellButton>
    </BellWrapper>
  );
};

export default Bell;
