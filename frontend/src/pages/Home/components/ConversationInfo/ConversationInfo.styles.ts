import styled from 'styled-components';

export const ConversationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  max-width: 400px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  overflow-y: auto;
  flex: 1;
`;
