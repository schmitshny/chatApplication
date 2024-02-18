import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.activeBackground};
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(BiSearch)`
  font-size: 1.2em;
  margin-right: 10px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.activeBackground};
  color: ${({ theme }) => theme.colors.text};
`;
