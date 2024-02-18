import { useState, useEffect, useRef, useCallback } from 'react';
import { Socket } from 'socket.io-client';
import { SOCKET_EVENTS } from './types';

interface TypingData {
  userId: number;
  isTyping: boolean;
}

export const useTypingStatus = (socket: Socket, otherUserId: number, currentUserId: number) => {
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef<number | null>(null);

  const handleTyping = useCallback(
    (data: TypingData) => {
      if (data.userId === otherUserId) {
        setIsTyping(data.isTyping);
      }
    },
    [otherUserId],
  );

  useEffect(() => {
    socket.on(SOCKET_EVENTS.userTyping, handleTyping);

    return () => {
      socket.off(SOCKET_EVENTS.userTyping, handleTyping);
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
    };
  }, [socket, handleTyping]);

  const sendTypingStatus = (isTyping: boolean) => {
    socket.emit(SOCKET_EVENTS.typing, { userId: currentUserId, recipientId: otherUserId, isTyping });
  };

  const handleTypingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    sendTypingStatus(true);
    typingTimer.current = setTimeout(() => sendTypingStatus(false), 5000);
  };

  return { isTyping, handleTypingChange, sendTypingStatus };
};
