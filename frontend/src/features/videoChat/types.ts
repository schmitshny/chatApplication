import { User } from '../auth/types';

export interface ICall {
  isReceivingCall: boolean;
  from: User;
  name: string;
  signal: any;
}

export interface ContextProps {
  call?: ICall;
  callAccepted: boolean;
  localVideo: React.MutableRefObject<HTMLVideoElement | null>;
  remoteVideo: React.MutableRefObject<HTMLVideoElement | null>;
  stream: MediaStream | undefined;
  remoteStream: MediaStream | undefined;
  name: string;
  setName: (name: string) => void;
  callEnded: boolean;
  callUser: (id: string) => void;
  leaveCall: (userId: number) => void;
  answerCall: () => void;
  setStream: (stream: MediaStream) => void;
  selectedUser: User | undefined;
  setSelectedUser: (user: User) => void;
}
