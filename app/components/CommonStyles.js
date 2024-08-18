// /app/components/Common/CommonStyles.js

import styled, { keyframes } from 'styled-components';

export const Grid = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 150px 150px 50px;
  align-items: center;
  justify-content: center;
  grid-gap: 40px 25px;
`;

const highlightBottom = '0 4px 3px 1px #FCFCFC';
const shadowBottom = '0 6px 8px #D6D7D9';
const shadowTop = '0 -4px 4px #CECFD1';
const highlightTop = '0 -6px 4px #FEFEFE';
const shadowInset = 'inset 0 0 3px 0 #CECFD1';
const shadowInsetHover = 'inset 0 0 3px 3px #CECFD1';
const shadowInsetFocus = 'inset 0 0 10px 0px rgba(0, 0, 250, .6)';
const shadowInsetActive = 'inset 0 0 5px 3px #999, inset 0 0 30px #aaa';

const buttonShadowBase = `${highlightBottom}, ${shadowBottom}, ${shadowTop}, ${highlightTop}`;
const buttonShadowDefault = `${buttonShadowBase}, ${shadowInset}`;
const buttonShadowHover = `${buttonShadowBase}, ${shadowInsetHover}`;
const buttonShadowFocus = `${buttonShadowBase}, ${shadowInsetFocus}`;
const buttonShadowActive = `${buttonShadowBase}, ${shadowInsetActive}`;

export const Button = styled.button`
  appearance: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  box-shadow: ${buttonShadowDefault};
  transition: all 0.2s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;

  &:hover:not([disabled]) {
    box-shadow: ${buttonShadowHover};
    transform: scale(0.975);
  }

  &:focus:not(:active) {
    animation: ${keyframes`
      from { box-shadow: ${buttonShadowFocus}; }
      to { box-shadow: ${buttonShadowHover}; }
    `} 0.9s alternate infinite;
    outline: none;
  }

  &:active:not([disabled]) {
    box-shadow: ${buttonShadowActive};
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const IconButton = styled(Button)`
  width: 50px;
  height: 50px;

  svg {
    width: 30px;
    height: 30px;
  }
`;
