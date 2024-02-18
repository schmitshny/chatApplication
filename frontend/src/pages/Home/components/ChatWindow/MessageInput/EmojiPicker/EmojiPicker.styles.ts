import styled from 'styled-components';

export const EmojiPickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const EmojiPickerDropdown = styled.div`
  position: absolute;
  bottom: 200%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;
