import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div<{ size: string }>`
  border: 4px solid rgba(255, 255, 255, 0.5);
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border-top-color: #007bff;
  animation: ${spin} 1s ease-in-out infinite;
  margin: 0 auto;
`;
