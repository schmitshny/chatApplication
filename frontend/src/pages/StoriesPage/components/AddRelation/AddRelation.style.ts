import styled from 'styled-components';

export const AddRelationWrapper = styled.div`
  padding: 20px 16px;
`;

export const AddIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.activeBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.info};
  font-size: 30px;
  cursor: pointer;
`;

export const AddRelationAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const AddTitle = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.286px;
`;

export const AddDescription = styled.p`
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.176px;
  margin-top: 1px;
`;
