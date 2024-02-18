import styled from 'styled-components';

export const UserContainer = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 20px 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.activeBackground : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;

export const UserName = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.286px;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LastMessageTime = styled.p`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.176px;
  margin-top: 1px;
`;

export const LastMessage = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.264px;
`;
