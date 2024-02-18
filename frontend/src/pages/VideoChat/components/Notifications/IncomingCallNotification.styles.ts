import styled from 'styled-components';

export const IncomingCallNotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  padding: 20px;
  background: #343434;
`;

export const NotificationHeader = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 10px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
