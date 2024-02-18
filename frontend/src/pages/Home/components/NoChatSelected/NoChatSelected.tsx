import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  color: #555;
`;

export const NoChatSelected = () => {
  return <MessageContainer>Select a chat or start a new conversation.</MessageContainer>;
};
