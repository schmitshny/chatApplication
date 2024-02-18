import styled from 'styled-components';

export const StoriesWrapper = styled.div`
  padding: 19px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 10px;
`;

export const StoriesHeader = styled.h4`
  color: ${({ theme }) => theme.colors.sectionHeader};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.308px;
`;

export const StoriesList = styled.ul`
  display: flex;
  gap: 13px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
