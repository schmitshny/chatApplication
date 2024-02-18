import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  display: inline-block;

  animation: ${bounceAnimation} 1.1s infinite ease-in-out both;
  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;
