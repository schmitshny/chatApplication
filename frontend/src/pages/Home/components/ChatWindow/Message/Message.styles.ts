import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-inline: 16px;
  align-items: flex-start;
`;

export const MessageInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MessageText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.264px;
`;

export const MessageImage = styled.img`
  width: 50%;
  height: 100%;
  max-height: 400px;
  border-radius: 8px;
  margin: 10px 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const MessageFile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0;
`;

export const FileName = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.264px;
  text-decoration: underline;
  cursor: pointer;
`;

export const UserName = styled.h5`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.286px;
`;

export const MessageTime = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.264px;
`;
