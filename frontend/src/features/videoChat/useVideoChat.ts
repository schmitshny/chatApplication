import { useContext } from 'react';
import { VideoChatContext } from './VideoChatContext';

export const useVideoChat = () => {
  const context = useContext(VideoChatContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
