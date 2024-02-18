import styled from 'styled-components';

export const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 2;
`;

export const MessagesWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondaryBackground};
`;
