import { useCallback, useEffect } from 'react';
import notificationSound from '../../assets/notificationSound.mp3';
import { useSocket } from '../socket/useSocket';
import { IMessage, SOCKET_EVENTS } from './types';
import { useConversationContext } from './context/useConversationContext';

export const useNotifications = () => {
  const socket = useSocket();
  const { activeConversationId, isMuted } = useConversationContext();

  const playNotificationSound = useCallback(() => {
    new Audio(notificationSound).play().catch((error) => console.error('Error playing notification sound:', error));
  }, []);

  useEffect(() => {
    const messageListener = (message: IMessage) => {
      const isCurrentConversation = message.conversationId === activeConversationId;

      const isNotificationEnabled = !isCurrentConversation && !isMuted;

      if (isNotificationEnabled) {
        playNotificationSound();
      }
    };

    if (socket) {
      socket.on(SOCKET_EVENTS.message, messageListener);
    }

    return () => {
      if (socket) {
        socket.off(SOCKET_EVENTS.message, messageListener);
      }
    };
  }, [socket, activeConversationId, playNotificationSound, isMuted]);
};
