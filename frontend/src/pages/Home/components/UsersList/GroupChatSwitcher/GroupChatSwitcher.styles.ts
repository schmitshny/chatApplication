import styled from 'styled-components';

export const GroupChatSwitcherWrapper = styled.div`
  margin: 6px auto;
  display: flex;
  width: 100%;
  padding: 6px 8px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 8px;
`;

export const SwitchButton = styled.button<{ $active?: boolean }>`
  padding: 6px;
  background: ${({ $active, theme }) => ($active ? theme.colors.background : theme.colors.secondaryBackground)};
  color: ${({ theme }) => theme.colors.buttonText};
  outline: none;
  border: none;
  width: 100%;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.264px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.5s ease;

  &:hover {
    opacity: 0.9;
  }
`;
