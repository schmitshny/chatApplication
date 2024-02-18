import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%, 100% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #a0a0a0;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 20px 16px;
`;

export const SkeletonAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${loading} 1.5s infinite ease-in-out;
`;

export const SkeletonText = styled.div`
  height: 10px;
  width: 150px;
  border-radius: 5px;
  animation: ${loading} 1.5s infinite ease-in-out;
`;

export const SkeletonTextSmall = styled(SkeletonText)`
  width: 100px;
  margin-top: 7px;
`;
