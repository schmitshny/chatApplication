import styled from 'styled-components';

export const RelationWrapper = styled.div<{ $isActive?: boolean }>`
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

export const StoryTime = styled.p`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.176px;
  margin-top: 1px;
`;

export const StoryAvatar = styled.div`
  border: 2px solid blue;
  border-radius: 50%;
`;
