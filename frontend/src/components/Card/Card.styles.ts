import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0 15px 16.83px 0.17px ${({ theme }) => theme.shadows.primary};
  border-radius: 20px;
  max-width: 500px;
  padding: 60px 40px;
  width: calc(100% - 30px);
  margin: auto auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: fit-content;
`;
