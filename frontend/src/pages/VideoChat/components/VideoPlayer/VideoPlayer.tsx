import { useEffect } from 'react';
import { useVideoChat } from '../../../../features/videoChat/useVideoChat';
import { VideosContainer, Video, VideoPaper, Placeholder, UserName, Info } from './VideoPlayer.styles';
import { Avatar, Spinner } from '../../../../components';
import { Sidebar } from '../Sidebar/Sidebar';

export const VideoPlayer = () => {
  const { callAccepted, localVideo, remoteVideo, callEnded, stream, setStream, selectedUser, remoteStream } =
    useVideoChat();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream);
      if (localVideo.current) localVideo.current.srcObject = currentStream;
    });
  }, [setStream, localVideo]);

  useEffect(() => {
    if (callAccepted && remoteStream && remoteVideo.current) {
      remoteVideo.current.srcObject = remoteStream;
    }
  }, [remoteStream, callAccepted, remoteVideo, localVideo, callEnded]);

  if (callEnded) {
    return (
      <VideosContainer>
        <VideoPaper>
          <Placeholder>
            <Info>Call Ended</Info>
          </Placeholder>
        </VideoPaper>
        <Sidebar userId={selectedUser?.id} />
      </VideosContainer>
    );
  }

  return (
    <VideosContainer>
      <VideoPaper data-local="true">
        {!stream ? <Spinner size="large" /> : <Video playsInline muted ref={localVideo} autoPlay />}
      </VideoPaper>
      <VideoPaper>
        {callAccepted && !callEnded ? (
          <Video playsInline ref={remoteVideo} autoPlay muted />
        ) : (
          <Placeholder>
            {selectedUser && (
              <>
                <Avatar avatarUrl={selectedUser?.avatarImg} size="large" />
                <UserName>{`${selectedUser?.name} ${selectedUser?.lastName}`}</UserName>
                <Info>Calling...</Info>
              </>
            )}
          </Placeholder>
        )}
      </VideoPaper>
      <Sidebar userId={selectedUser?.id} />
    </VideosContainer>
  );
};
