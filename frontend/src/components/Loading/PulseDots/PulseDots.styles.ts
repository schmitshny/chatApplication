import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const PulseDot = styled.div<{ $delay?: string }>`
  width: 10px;
  height: 10px;
  background-color: #007bff;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${pulse} 1.5s infinite ease-in-out;
  animation-delay: ${({ $delay = '0s' }) => $delay};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
