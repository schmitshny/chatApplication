import styled from 'styled-components';

export const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 19px;
  margin-bottom: 10px;
`;

export const UserName = styled.h5`
  padding: 4px 16px 16px 16px;
  text-align: center;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.352px;
  margin: 0 auto;
  border-bottom: 0.6px solid #6a6a6a;
`;
