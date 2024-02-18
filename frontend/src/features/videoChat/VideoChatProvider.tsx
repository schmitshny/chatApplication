import React, { useState, useRef, useEffect, ReactNode, useContext } from 'react';
import Peer from 'simple-peer';
import { SocketContext } from '../socket/context';
import { ICall } from './types';
import { VideoChatContext } from './VideoChatContext';
import { useNavigate } from 'react-router-dom';
import { User } from '../auth/types';
import { useAuthContext } from '../auth/context/useAuthContext';

export const VideoChatContexProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const socket = useContext(SocketContext);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | undefined>();
  const [remoteStream, setRemoteStream] = useState<MediaStream | undefined>();
  const [name, setName] = useState<string>('');
  const [call, setCall] = useState<ICall | undefined>(undefined);
  const [selectedUser, setSelectedUser] = useState<User>();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const localVideo = useRef<HTMLVideoElement | null>(null);
  const remoteVideo = useRef<HTMLVideoElement | null>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream);
      if (localVideo.current) {
        localVideo.current.srcObject = currentStream;
      }
    });

    if (socket) {
      socket.on('callUser', ({ from, name: callerName, signal }: ICall) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }

    return () => {
      if (socket) {
        socket.off('me');
        socket.off('callUser');
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('callEnded', () => {
        setCallEnded(true);
        connectionRef.current?.destroy();
      });
    }

    return () => {
      if (socket) socket.off('callEnded');
    };
  }, [socket]);

  const answerCall = () => {
    navigate('/video-chat');

    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket?.emit('answerCall', { signal: data, to: call?.from });
    });

    peer.on('stream', (remoteStream) => {
      setRemoteStream(remoteStream);
    });

    peer.signal(call?.signal);
    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    navigate('/video-chat');

    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket?.emit('callUser', { userToCall: id, signalData: data, from: user, name });
    });

    socket?.on('callAccepted', (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    peer.on('stream', (remoteStream) => {
      setRemoteStream(remoteStream);
    });

    connectionRef.current = peer;
  };

  const leaveCall = (userId: number) => {
    setCallEnded(true);

    if (connectionRef.current) {
      connectionRef.current.destroy();
    }

    socket?.emit('endCall', { to: userId });

    navigate('/');
    window.location.reload();
  };

  return (
    <VideoChatContext.Provider
      value={{
        call,
        callAccepted,
        localVideo,
        remoteVideo,
        stream,
        setStream,
        name,
        setName,
        callEnded,
        callUser,
        leaveCall,
        answerCall,
        setSelectedUser,
        selectedUser,
        remoteStream,
      }}
    >
      {children}
    </VideoChatContext.Provider>
  );
};
