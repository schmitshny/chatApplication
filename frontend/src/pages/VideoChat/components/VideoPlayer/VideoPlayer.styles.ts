import styled from 'styled-components';

export const VideosContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const VideoPaper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-local='true'] {
    right: 20px;
    bottom: 20px;
    width: 250px;
    height: 180px;
    border-radius: 10px;
    border: 1px solid #fff;
    overflow: hidden;
    z-index: 2;
    background-color: #fff;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.span`
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 500;
`;

export const Info = styled.span`
  font-size: 0.9rem;
`;
