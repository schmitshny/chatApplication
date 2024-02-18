import styled from 'styled-components';

export const UserSettingsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  height: 53px;
  padding: 14px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.activeBackground};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const OptionTitle = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  letter-spacing: 0.308px;
  line-height: 130%;
  justify-content: center;
`;
