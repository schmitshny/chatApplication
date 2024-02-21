import styled from 'styled-components';

export const MessageActionsContainer = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: -15px;
  right: -10px;
  padding: 5px;
  z-index: 1;
`;

export const EmojiPickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const EmojiPickerDropdown = styled.div`
  position: absolute;
  bottom: 200%;
  left: 150%;
  transform: translateX(-100%);
  z-index: 1000;
`;
