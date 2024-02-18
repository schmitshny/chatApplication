import styled, { keyframes } from 'styled-components';
import { AlertType } from './types';

export const getAlertColor = (type: AlertType) => {
  switch (type) {
    case 'success':
      return '#4caf50';
    case 'error':
      return '#f44336';
    case 'info':
      return '#2196f3';
  }
};

export const StyledAlertContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const AlertBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px 15px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  box-sizing: border-box;
  animation: slideIn 0.5s ease;
  overflow: hidden;
`;

export const AlertMessage = styled.span`
  flex-grow: 1;
  padding: 0 20px 0 10px;
`;

export const CloseIcon = styled.div`
  color: #666;
  position: absolute;
  top: 4px;
  right: 4px;

  &:hover {
    color: #000;
  }
`;

const shrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

export const ProgressBar = styled.div<{ type: AlertType }>`
  height: 5px;
  background-color: ${({ type }) => getAlertColor(type)};
  animation: ${shrink} 3s linear forwards;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
