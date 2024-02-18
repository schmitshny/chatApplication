import { useEffect, useState } from 'react';
import { useSocket } from '../socket/useSocket';
import { SOCKET_EVENTS, UserStatus } from './types';

export const useOnlineUsers = () => {
  const socket = useSocket();
  const [onlineUsers, setOnlineUsers] = useState<UserStatus[]>([]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.userStatusUpdate, (usersStatus: UserStatus[]) => {
      setOnlineUsers(usersStatus);
    });

    return () => {
      socket.off(SOCKET_EVENTS.userStatusUpdate);
    };
  }, [socket]);

  return { onlineUsers };
};
