import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.activeBackground};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: bold;
`;
