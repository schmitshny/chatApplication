import styled from 'styled-components';

export const StyledSectionHeader = styled.header`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionHeaderTitle = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.352px;
`;
