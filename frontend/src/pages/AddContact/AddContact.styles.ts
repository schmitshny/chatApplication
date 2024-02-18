import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const SearchContactsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  border-radius: 20px;
  gap: 20px;
  margin: auto auto;
  width: calc(100% - 30px);
  max-width: 500px;
  height: 70%;
  padding: 20px;
  overflow-y: auto;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
