import styled from 'styled-components';

export const EmojiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;
  cursor: pointer;
  border-radius: 30%;
  background-color: ${({ theme }) => theme.colors.activeBackground};
`;
