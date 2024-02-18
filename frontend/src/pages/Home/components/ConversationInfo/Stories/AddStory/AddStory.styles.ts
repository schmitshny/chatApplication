import styled, { keyframes } from 'styled-components';

export const AddIcon = styled.div`
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.contrastBackground};
  cursor: pointer;
  position: absolute;
  left: -3px;
  top: -3px;
`;

export const PickerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #eee;
`;

export const loadingAnimation = keyframes`
  0% { background-color: #cccccc; }  
  50% { background-color: #ffffff; }  
  100% { background-color: #cccccc; } 
`;

export const SkeletonLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;
`;
