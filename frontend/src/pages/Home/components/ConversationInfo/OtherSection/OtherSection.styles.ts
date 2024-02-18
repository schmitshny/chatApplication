import styled from 'styled-components';

export const OtherSectionContainer = styled.div`
  flex: 1;
  padding: 19px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const OtherSectionHeader = styled.h4`
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.308px;
`;

export const OtherOption = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const OptionWrapper = styled.div`
  display: flex;
  gap: 6px;
  height: 24px;
`;

export const OptionDescription = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.264px;
  align-self: center;
`;
