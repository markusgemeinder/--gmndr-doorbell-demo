// /app/components/Common/CommonStyles.js

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
`;
