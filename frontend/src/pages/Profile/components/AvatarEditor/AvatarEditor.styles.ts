import styled from 'styled-components';

export const AvatarEditorContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  background-color: ${({ theme }) => theme.colors.activeBackground};
`;
