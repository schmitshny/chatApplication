import styled from 'styled-components';

export const IconWrapper = styled.div<{ $hoverTint?: string; $color?: string }>`
  position: relative;
  display: flex;
  align-content: center;
  cursor: pointer;

  svg {
    transition: fill 0.2s ease-in-out;
    rect {
      fill: ${({ theme }) => theme.colors.iconBackground};
    }
    path {
      fill: ${({ $color }) => $color || 'currentColor'};
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const HoverText = styled.span`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.2s linear;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  white-space: nowrap;
  margin-left: 8px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.75rem;
  pointer-events: none;
  z-index: 1;
`;
